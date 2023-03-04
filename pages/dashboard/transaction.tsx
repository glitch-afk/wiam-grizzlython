import React from "react"
import Head from "next/head"
import { OverViewCardsData } from "@/data"

import OverviewChart from "@/components/charts/overview"
import DashboardLayout from "@/components/dashboard/_layout"
import TransactionTable from "@/components/dashboard/tables/transaction-table"
import { strokeColors } from "."

const TransactionPage = () => {
  return (
    <>
      <Head>
        <title>Transaction</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="bg-dark-600 border-dark-400 w-full rounded-lg border p-4">
          {/* overview cards */}
          <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {OverViewCardsData.map(
              ({ title, dataDisplay, percentChange }, idx) => (
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
              )
            )}
          </div>
        </div>

        {/* transaction table */}
        <div className="mt-8 w-full">
          <TransactionTable />
        </div>
      </DashboardLayout>
    </>
  )
}

export default TransactionPage
