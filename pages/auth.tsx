import React from "react"
import Head from "next/head"
import Link from "next/link"

import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button/button"
import WalletConnect from "@/components/wallet-connect"

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Connect Wallet</title>
        <meta name="description" content="Connect your solana wallet" />
      </Head>
      <SiteHeader drawer="MOBILE_NAV"></SiteHeader>
      <main className="px-6 2xl:px-0">
        <div className="mt-48 flex justify-center lg:mt-52 xl:mt-56 2xl:mt-64">
          <div className="border-dark-500 bg-dark-600 w-full max-w-md rounded-xl border-2 px-6 py-12">
            <div className="flex w-full justify-center">
              <div className="flex items-center">
                <Icons.logo className="mx-auto mr-2 inline h-auto w-10" />
                <span className="text-2xl font-bold">WIAM</span>
              </div>
            </div>

            <div className="mt-8 flex w-full items-center justify-center">
              <WalletConnect />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthPage
