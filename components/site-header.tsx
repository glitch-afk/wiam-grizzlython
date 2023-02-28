"use client"

import React from "react"
import { Icons } from "./icons"
import Logo from "./site-logo"
import { Button } from "./ui/button"

interface SiteHeaderProps {
  children?: React.ReactNode
}

const SiteHeader = ({ children }: SiteHeaderProps) => {
  return (
    <header className="mx-auto flex w-full max-w-8xl items-center justify-between p-3 md:p-6 2xl:px-0">
      <div>
        <Logo />
      </div>
      <>{children}</>
      <Button className="md:hidden" variant="ghost" shape="pill">
        <Icons.menu className="inline h-auto w-5" />
      </Button>
    </header>
  )
}

export default SiteHeader
