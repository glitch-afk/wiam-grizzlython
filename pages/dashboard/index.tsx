import React, { useState } from "react"
import Head from "next/head"
import { OverViewCardsData } from "@/data"
import {
  monthlyComparison,
  weeklyComparison,
  yearlyComparison,
} from "@/data/index"

import OverviewChart from "@/components/charts/overview"
import TransactionChart from "@/components/charts/transation"
import DashboardLayout from "@/components/dashboard/_layout"
import PagePerformanceTable from "@/components/dashboard/tables/page-performance-table"
import RecentActivityTable from "@/components/dashboard/tables/recent-activity"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const strokeColors = ["#9747FF", "#F92672", "#4DA765", "#FF8947"]

const Dashboard = () => {
  const [transactionChartData, setTransactionChartData] =
    useState(yearlyComparison)

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
        <div className="bg-brand-600 border-brand-400 w-full rounded-lg border p-4">
          {/* overview cards */}
          <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {OverViewCardsData.map(
              ({ title, dataDisplay, percentChange }, idx) => (
                <div
                  className="border-brand-400 shadow-card hover:bg-brand-500 rounded-md border p-4"
                  key={idx}
                >
                  <span className="text-brand-50 text-sm font-semibold">
                    {title}
                  </span>
                  <OverviewChart
                    strokeColor={strokeColors[idx]}
                    percentChange={percentChange}
                    dataDisplay={dataDisplay}
                  />
                </div>
              )
            )}
          </div>
          {/* volume chart */}
          <div>
            <div className="mt-16">
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
            </div>
            <div className="-mx-6 mt-5 h-56 sm:mt-8 md:h-96">
              <TransactionChart chartData={transactionChartData} />
            </div>
          </div>
        </div>
        {/* tables */}
        <div className="mt-6 grid w-full grid-cols-1 gap-4 xl:grid-cols-8 xl:gap-6">
          <div className="bg-brand-600 border-brand-400 col-span-1 rounded-lg border p-3 md:p-6 xl:col-span-5">
            <div>
              <h3 className="text-brand-100 text-xl font-semibold">
                Recent Activities
              </h3>

              <div className="mt-8 overflow-hidden rounded-lg shadow">
                <RecentActivityTable />
              </div>
            </div>
          </div>
          <div className="bg-brand-600 border-brand-400 col-span-1 rounded-lg border p-3 md:p-6 xl:col-span-3">
            <h3 className="text-brand-100 text-xl font-semibold">
              Page Performance
            </h3>
            <div className="mt-8 overflow-hidden rounded-lg shadow">
              <PagePerformanceTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Dashboard
