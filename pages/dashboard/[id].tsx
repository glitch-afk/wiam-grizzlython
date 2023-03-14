import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { OverViewCardsData } from "@/data"
import {
  monthlyComparison,
  weeklyComparison,
  yearlyComparison,
} from "@/data/index"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"

import {
  Event,
  PageViewedEvent,
  WalletConnectedEvent,
  convertWalletConnectedGraph,
  findEventsByProject,
  generateRetentionTime,
  findIamByProject,
} from "@/lib/api/events"
import OverviewChart from "@/components/charts/overview"
import TransactionChart from "@/components/charts/transation"
import DashboardLayout from "@/components/dashboard/_layout"
import PagePerformanceTable from "@/components/dashboard/tables/page-performance-table"
import RecentActivityTable from "@/components/dashboard/tables/recent-activity"
import {
  pageViewedAtom,
  walletConnectedAtom,
} from "@/components/drawer-views/context"

export const strokeColors = ["#9747FF", "#F92672", "#4DA765", "#FF8947"]

const Dashboard = () => {
  const [transactionChartData, setTransactionChartData] =
    useState(yearlyComparison)
  const [overviewData, setOverviewData] = useState(OverViewCardsData)
  const { query } = useRouter()

  const [projectId, setProjectId] = useState(query.id)

  const [walletConnectedEvents, setWalletConnectedEvents] =
    useAtom(walletConnectedAtom)
  const [pageViewedEvents, setPageViewedEvents] = useAtom(pageViewedAtom)

  const { isLoading, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const id = window.location.pathname.split("/")[2]
      return findEventsByProject(id ?? query.id as string)
        .then((res) => {
          const walletConnectedEvents: WalletConnectedEvent[] = []
          const pageViewedEvents: PageViewedEvent[] = []
          const transactionEvents: Event<any>[] = []

          res.map((x) => {
            if (x.name === "wallet_connected")
              walletConnectedEvents.push(x as WalletConnectedEvent)
            else if (x.name === "page_viewed")
              pageViewedEvents.push(x as PageViewedEvent)
            else if (x.name === "transaction_executed")
              transactionEvents.push(x)
          })

          setWalletConnectedEvents(walletConnectedEvents)
          setPageViewedEvents(pageViewedEvents)

          return res
        })
        .catch((e) => {
          console.error(e)
        })
    },
    refetchOnWindowFocus: true,
  })

  const { data: iamData, isLoading: isLoadingIam } = useQuery({
    queryKey: ["tableData"],
    queryFn: async () => {
      const id = window.location.pathname.split("/")[2]
      return findIamByProject(id ?? query.id as string).then((x) =>
        x.map((y) => ({ ...y }))
      )
    },
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if(iamData) {
      setOverviewData((x) => {
        let shallowCopy = [...x]

        shallowCopy[1].dataDisplay = `${iamData.length} Users`
        shallowCopy[1].percentChange = 0

        return x
      })
    }
  }, [iamData])

  useEffect(() => {
    if (!isLoading && !error && walletConnectedEvents.length > 0) {
      const answer = convertWalletConnectedGraph(
        walletConnectedEvents.map((x) => ({
          ...x,
          data: {
            startTime: new Date(x.data.startTime),
            address: x.data.address,
            endTime: new Date(x.data.endTime) ? x.data.endTime : new Date(),
          },
        }))
      )

      setTransactionChartData(
        Object.values(answer)
          .reverse()
          .map((x) => ({
            date: new Date(x.startDate).getTime(),
            sessions: x.number,
            btc: 0,
            diff: 0,
            name: new Date(x.startDate).toDateString(),
            eth: x.number,
            percentage: (x.number % 100).toString(),
          }))
      )

      setOverviewData((x) => {
        let shallowCopy = [...x]

        let today = new Date()
        today.setDate(today.getDate() - ((today.getDay() + 6) % 7))

        const currentRetentionTime = answer[today.toDateString()].number
        today.setDate(today.getDate() - 7)
        const previousRetentionTime = answer[today.toDateString()].number

        // shallowCopy[1].dataDisplay = `${currentRetentionTime.toFixed(2)} Users`
        // if (currentRetentionTime <= 0) shallowCopy[1].percentChange = -100
        // else if (previousRetentionTime <= 0) shallowCopy[1].percentChange = 100
        // else
        //   shallowCopy[1].percentChange = Number(
        //     ((currentRetentionTime / previousRetentionTime) * 100).toFixed(2)
        //   )

        shallowCopy[0].dataDisplay = `${pageViewedEvents.length} Views`

        return x
      })
    }
  }, [walletConnectedEvents, pageViewedEvents, isLoading])

  useEffect(() => {
    const retention = generateRetentionTime(walletConnectedEvents)

    setOverviewData((x) => {
      let shallowCopy = [...x]

      let today = new Date()
      today.setDate(today.getDate() - ((today.getDay() + 6) % 7))

      const currentRetentionTime = retention[today.toDateString()].number
      today.setDate(today.getDate() - 7)
      const previousRetentionTime = retention[today.toDateString()].number

      shallowCopy[2].dataDisplay = `${currentRetentionTime.toFixed(2)} Sec`
      if (currentRetentionTime <= 0) shallowCopy[2].percentChange = -100
      else if (previousRetentionTime <= 0) shallowCopy[2].percentChange = 100
      else
        shallowCopy[2].percentChange = Number(
          ((currentRetentionTime / previousRetentionTime) * 100).toFixed(2)
        )

      return x
    })
  }, [walletConnectedEvents])

  const handleOnChange = (value: string) => {
    switch (value) {
      case "Week":
        setTransactionChartData(weeklyComparison)
        break
      case "Month":
        setTransactionChartData(monthlyComparison)
        break
      case "Year":
        setTransactionChartData(yearlyComparison)
        break
      default:
        setTransactionChartData(yearlyComparison)
        break
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="bg-dark-600 border-dark-400 w-full rounded-lg border p-4">
          {/* overview cards */}
          <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {overviewData.map(({ title, dataDisplay, percentChange }, idx) => (
              <div
                className="border-dark-400 shadow-card hover:bg-dark-500 rounded-md border p-4"
                key={idx}
              >
                <span className="text-dark-50 text-sm font-semibold">
                  {title}
                </span>
                <OverviewChart
                  strokeColor={strokeColors[idx]}
                  percentChange={percentChange}
                  dataDisplay={dataDisplay}
                />
              </div>
            ))}
          </div>
          {/* volume chart */}
          <div>
            {/* <div className="mt-16">
              <Select onValueChange={handleOnChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Yearly Data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Week">Weekly Data</SelectItem>
                  <SelectItem value="Month">Monthly Data</SelectItem>
                  <SelectItem value="Year">Yearly Data</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="mt-16">
              <h1>Users</h1>
            </div>
            <div className="-mx-6 mt-5 h-56 sm:mt-8 md:h-96">
              <TransactionChart chartData={transactionChartData} />
            </div>
          </div>
        </div>
        {/* tables */}
        <div className="mt-6 grid w-full grid-cols-1 gap-4 xl:grid-cols-8 xl:gap-6">
          <div className="bg-dark-600 border-dark-400 col-span-1 rounded-lg border p-3 md:p-6 xl:col-span-5">
            <div>
              <h3 className="text-dark-100 text-xl font-semibold">
                Recent Activities
              </h3>

              <div className="mt-8 overflow-hidden rounded-lg shadow">
                <RecentActivityTable activities={data ?? []} />
              </div>
            </div>
          </div>
          <div className="bg-dark-600 border-dark-400 col-span-1 rounded-lg border p-3 md:p-6 xl:col-span-3">
            <h3 className="text-dark-100 text-xl font-semibold">
              Page Performance
            </h3>
            <div className="mt-8 overflow-hidden rounded-lg shadow">
              <PagePerformanceTable pageViews={pageViewedEvents ?? []} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Dashboard
