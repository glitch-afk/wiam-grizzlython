import React from "react"
import Head from "next/head"

import DashboardLayout from "@/components/dashboard/_layout"

const TransactionPage = () => {
  return (
    <>
      <Head>
        <title>Transaction</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="bg-dark-600 border-dark-400 w-full rounded-lg border p-4"></div>
      </DashboardLayout>
    </>
  )
}

export default TransactionPage
