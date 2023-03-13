import React, { useEffect, useState } from "react"
import Head from "next/head"

import DashboardLayout from "@/components/dashboard/_layout"
import { Icons } from "@/components/icons"
import { findProjectById } from "@/lib/api/projects"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

const APIKey = () => {
  const [apiKey, setApiKey] = useState("")

  const { query } = useRouter()

  const { data: tableData, isLoading } = useQuery({
    queryKey: ["tableData"],
    queryFn: async () => {
      return findProjectById(query.id as string).then(x => setApiKey(x[0].key as string))
    },
    refetchOnWindowFocus: false,
  })

  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      let timeout = setTimeout(() => setIsCopied(false), 2000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [isCopied])

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
