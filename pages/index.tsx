import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { siteConfig, siteRoutes } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import SiteHeader from "@/components/site-header"
import Button from "@/components/ui/button"
import User from "@/components/user"

const Home: NextPage = () => {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>WIAM</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader navItems={siteConfig.mainNav}>
        <MainNav
          navItems={siteConfig.mainNav}
          classes="md:flex lg:ml-28 border border-brand-400 justify-between px-3 py-1 max-w-[320px] lg:max-w-[360px] w-full rounded-full hidden"
        />
        <div className="hidden space-x-2 md:flex">
          {session ? (
            <User userClasses="space-x-3 bg-brand-600 rounded-full" />
          ) : (
            <>
              <Link href={siteRoutes.login}>
                <Button size="small">Log in</Button>
              </Link>
              <Link href={siteRoutes.register}>
                <Button color="white" size="small">
                  Get Started
                  <Icons.rightArrow className="h-auto w-5" />
                </Button>
              </Link>
            </>
          )}
        </div>
      </SiteHeader>
      <main className="max-w-8xl mx-auto w-full px-6 2xl:px-0">
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* pill banner */}
              <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-[#f92672] to-[#8e64ff] p-[2px] text-sm leading-6">
                <div className="bg-brand-700 flex h-6 items-center rounded-full p-2">
                  <span>Learn more about the product</span>
                </div>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Powerful analytics services for your web3 dapps
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Unlock deep insights into your Web3 DApp performance with us.
                Tailored specifically for Web3 DApps, our platform provides the
                data you need to make informed decisions and drive business
                growth.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/projects" className="customBtn relative">
                  Get Started
                </Link>
              </div>
            </div>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/home.png"
              alt="App screenshot"
              className="mt-16 w-full rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>
          {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)"
                fillOpacity=".2"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ee0717bf-3e43-49df-b1bd-de36422ed3d3"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default Home
