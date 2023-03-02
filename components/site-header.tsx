import React from "react"

import { DRAWER_VIEW, useDrawer } from "@/components/drawer-views/context"
import Logo from "@/components/site-logo"
import Hamburger from "@/components/ui/hamburger"

interface SiteHeaderProps {
  children?: React.ReactNode
  drawer: DRAWER_VIEW
}

const SiteHeader = ({ children, drawer }: SiteHeaderProps) => {
  const { openDrawer } = useDrawer()
  return (
    <header className="max-w-8xl mx-auto flex w-full items-center justify-between p-6 2xl:px-0">
      <div className="w-full justify-start">
        <Logo />
      </div>
      <>{children}</>

      <Hamburger onClick={() => openDrawer(drawer)} className="lg:hidden" />
    </header>
  )
}

export default SiteHeader
