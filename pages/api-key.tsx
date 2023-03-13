import React, { useEffect, useState } from "react"
import Head from "next/head"

import DashboardLayout from "@/components/dashboard/_layout"
import { Icons } from "@/components/icons"

const APIKey = () => {
  const [apiKey, setApiKey] = useState(
    "08y389fh394g872378h23487gh83u24ng8u34nun"
  )
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      let timeout = setTimeout(() => setIsCopied(false), 2000)
      return () => {
        clearTimeout(timeout)
      }
    }
  })

  return (
    <>
      <Head>
        <title>API Keys</title>
        <meta name="description" content="WIAM API Keys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <h2 className="mb-4 text-2xl font-bold">API KEY</h2>

        <div className="bg-dark-600 border-dark-400 relative flex h-12 max-w-md items-center rounded-lg border">
          <span className="text-dark-100 overflow-hidden truncate pl-4">
            {apiKey}
          </span>
          <button
            className="bg-dark-600 z-50 mx-4 flex h-full items-center"
            onClick={() => {
              window.navigator.clipboard.writeText(apiKey)
              setIsCopied(true)
            }}
          >
            {isCopied ? (
              <Icons.check className="inline h-auto w-4" />
            ) : (
              <Icons.copy className="inline h-auto w-4" />
            )}
          </button>
        </div>
      </DashboardLayout>
    </>
  )
}

export default APIKey
