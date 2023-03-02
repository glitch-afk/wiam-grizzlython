"use client"

import React from "react"
import { useDrawer } from "./drawer-views/context"
import { Icons } from "./icons"
import Logo from "./site-logo"
import { Button } from "./ui/button"
import type { DRAWER_VIEW } from "@/components/drawer-views/context"

interface SiteHeaderProps {
  children?: React.ReactNode
  drawer: DRAWER_VIEW
}

const SiteHeader = ({ children, drawer }: SiteHeaderProps) => {
  const { openDrawer } = useDrawer()
  return (
    <header className="max-w-8xl mx-auto flex w-full items-center justify-between p-3 md:p-6 2xl:px-0">
      <div className="w-full justify-start">
        <Logo />
      </div>
      <>{children}</>
      <Button
        className="lg:hidden"
        variant="ghost"
        shape="pill"
        onClick={() => openDrawer(drawer)}
      >
        <Icons.menu className="inline h-auto w-5" />
      </Button>
    </header>
  )
}

export default SiteHeader
