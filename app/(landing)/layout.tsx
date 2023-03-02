import MainNav from "@/components/main-nav"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { siteConfig, siteRoutes } from "@/config/site"
import Link from "next/link"
import React from "react"

interface LandingLayoutProps {
  children: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <SiteHeader drawer="MOBILE_NAV">
        <>
          <div className="flex w-full items-center justify-center text-center">
            <MainNav
              mainNavItem={siteConfig.mainNav}
              mainNavClasses="lg:flex items-center space-x-4 lg:space-x-6 justify-between border border-dark-400 rounded-full py-2 px-4 max-w-[350px] w-full hidden"
            />
          </div>
          <div className="hidden w-full items-center justify-end space-x-4 lg:flex">
            <Link href={siteRoutes.login}>
              <Button shape="pill" variant="ghost" className="text-semibold">
                Log in
              </Button>
            </Link>
            <Link href={siteRoutes.register}>
              <Button shape="pill" variant="subtle" className="text-semibold">
                Sign Up
              </Button>
            </Link>
          </div>
        </>
      </SiteHeader>
      <main className="mx-auto overflow-hidden px-3 md:px-6 2xl:px-0">
        {children}
      </main>
    </>
  )
}

export default LandingLayout
