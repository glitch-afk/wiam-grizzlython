import MainNav from "@/components/main-nav"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import React from "react"

interface LandingLayoutProps {
  children: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <SiteHeader>
        <>
          <MainNav
            mainNavItem={siteConfig.mainNav}
            mainNavClasses="lg:flex items-center space-x-4 lg:space-x-6 justify-between border border-dark-400 rounded-full py-2 px-4 max-w-[350px] w-full hidden"
          />
          <div className="hidden items-center space-x-2 md:flex lg:space-x-4">
            <Button shape="pill" variant="ghost" className="text-semibold">
              Log in
            </Button>
            <Button shape="pill" variant="subtle" className="text-semibold">
              Sign Up
            </Button>
          </div>
        </>
      </SiteHeader>
      <main className="mx-auto max-w-8xl px-3 md:px-6 2xl:px-0">
        {children}
      </main>
    </>
  )
}

export default LandingLayout
