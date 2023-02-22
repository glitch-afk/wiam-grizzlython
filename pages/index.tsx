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
          classes="md:flex border border-brand-400 justify-between px-3 py-1 max-w-[320px] lg:max-w-[360px] w-full rounded-full hidden"
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
        <h1>Hello world</h1>
      </main>
    </>
  )
}

export default Home
