import React from "react"
import Head from "next/head"
import base58 from "bs58"

import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button/button"
import WalletConnect from "@/components/wallet-connect"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import axios from "axios"
import { authenticate } from "@/lib/api/auth"
import { useRouter } from "next/router"

const AuthPage = () => {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const router = useRouter()

  const signMessage = async () => {
    if (!wallet.connected) {
      walletModal.setVisible(true);
    }

    const message = "wiam did this"

    // @ts-ignore
    const signature = await wallet.signMessage(Buffer.from(message))

    const serializedSignature = base58.encode(signature)

    return serializedSignature
  }

  const signIn = async () => {
    const signature = await signMessage()
    const address = wallet.publicKey?.toString()

    const data = await authenticate("", signature, address?.toString() as string)

    window.localStorage.setItem("accessToken", data.accessToken)
    window.localStorage.setItem("refreshToken", data.refreshToken)

    router.push("/projects")
  }
  
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

            <div className="mt-8 flex flex-col space-y-2 w-full items-center justify-center">
              <WalletConnect />
              {wallet && 
                <div onClick={() => signIn()} className="cursor-pointer px-3 font-bold rounded-md hover:bg-brand-pink/20 py-2 bg-brand-pink">
                  Sign Message
                </div>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthPage
