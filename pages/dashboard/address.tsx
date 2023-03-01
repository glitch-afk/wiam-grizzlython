import React from "react"
import Head from "next/head"
import { OverViewCardsData } from "@/data"

import OverviewChart from "@/components/charts/overview"
import DashboardLayout from "@/components/dashboard/_layout"
import WalletAddressTable from "@/components/dashboard/tables/wallet-address-table"

const strokeColors = ["#9747FF", "#F92672", "#4DA765", "#FF8947"]

const AddressPage = () => {
  return (
    <>
      <Head>
        <title>Address</title>
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
        </div>

        {/* wallet address table */}
        <div className="mt-8 w-full">
          <WalletAddressTable />
        </div>
      </DashboardLayout>
    </>
  )
}

export default AddressPage
