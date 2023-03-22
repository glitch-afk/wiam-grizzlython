import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import { siteConfig, siteRoutes } from "@/config/site"
import FeaturesSection from "@/components/landing/features"
import Hero from "@/components/landing/hero"
import IntegrationSection from "@/components/landing/integration"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button/button"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WIAM</title>
        <meta name="description" content="Analytics for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader drawer="MOBILE_NAV">
        <>
          <div className="flex w-full items-center justify-center text-center">
            <MainNav
              mainNavItem={siteConfig.mainNav}
              mainNavClasses="lg:flex items-center space-x-4 lg:space-x-6 justify-between border border-dark-400 rounded-full py-2 px-4 max-w-[350px] w-full hidden"
            />
          </div>
          <div className="hidden w-full items-center justify-end space-x-4 lg:flex">
            <Link href={siteRoutes.auth}>
              <Button shape="pill" className="text-semibold" variant={"subtle"}>
                Log In
              </Button>
            </Link>
          </div>
        </>
      </SiteHeader>
      <main className="mx-auto overflow-hidden px-3 md:px-6 2xl:px-0">
        <div className="relative pb-12 pt-24 sm:pt-32 lg:pb-16">
          <Hero />
          {/* feature section */}
          <FeaturesSection />
          {/* Integration Section */}
          <IntegrationSection />
          {/* onboarding */}
          <div className="max-w-8xl mx-auto text-center">
            <h2 className="to-dark-200 mx-auto max-w-3xl bg-gradient-to-b from-white bg-clip-text text-3xl font-extrabold text-transparent lg:text-6xl">
              Ready to take your data analysis to the next level?
            </h2>
            <p className="text-dark-100 mx-auto mt-6 max-w-xl text-lg leading-6 tracking-wide">
              Maximize your business&apos;s potential with data-driven insights.
              Sign up for our analytics service now and get the edge you need to
              outpace the competition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={siteConfig.links.docs} className="customBtn relative">
                Get Started
              </Link>
            </div>
          </div>
          {/* footer */}
          <SiteFooter />
        </div>
      </main>
    </>
  )
}

export default Home
