"use client"

import React from "react"
import { useDrawer } from "./drawer-views/context"
import { Icons } from "./icons"
import Logo from "./site-logo"
import { Button } from "./ui/button"

interface SiteHeaderProps {
  children?: React.ReactNode
}

const SiteHeader = ({ children }: SiteHeaderProps) => {
  const { openDrawer } = useDrawer()
  return (
    <header className="mx-auto flex w-full max-w-8xl items-center justify-between p-3 md:p-6 2xl:px-0">
      <div>
        <Logo />
      </div>
      <>{children}</>
      <Button
        className="lg:hidden"
        variant="ghost"
        shape="pill"
        onClick={() => openDrawer("MOBILE_NAV")}
      >
        <Icons.menu className="inline h-auto w-5" />
      </Button>
    </header>
  )
}

export default SiteHeader
