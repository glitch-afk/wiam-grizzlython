import React from "react"

import { cn } from "@/lib/utils"
import { useDrawer } from "../drawer-views/context"
import Logo from "../site-logo"
import Hamburger from "../ui/hamburger"
import User from "../user"

function HeaderRightArea() {
  return (
    <div className="relative order-last flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
      <User userClasses="p-1 bg-brand-700 rounded-full flex space-x-2" />
    </div>
  )
}

const Header = ({ className }: { className?: string }) => {
  const { openDrawer } = useDrawer()
  return (
    <nav
      className={cn(
        "3xl:h-24 bg-brand-600 sticky top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-20",
        className
      )}
    >
      <div className="3xl:px-10 flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Hamburger
            className="flex xl:hidden"
            onClick={() => openDrawer("DASHBOARD_SIDEBAR")}
          />
          <Logo />
        </div>
        <HeaderRightArea />
      </div>
    </nav>
  )
}

export default Header
