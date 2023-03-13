import React from "react"
import Link from "next/link"
import { type NavItem } from "@/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button/button"
import WalletConnect from "@/components/wallet-connect"
import { useDrawer } from "./drawer-views/context"
import { Icons } from "./icons"
import Logo from "./site-logo"

interface MobileMavProps {
  mobileNavItems?: NavItem[]
  children?: React.ReactNode
}

const MobileNav = ({ mobileNavItems, children }: MobileMavProps) => {
  const { closeDrawer } = useDrawer()

  return (
    <div
      className={cn(
        "border-dark-400 bg-dark-600 xs:w-80 top-0 left-0 z-40 h-full w-full max-w-full border-r"
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <Button
          variant={"ghost"}
          shape={"pill"}
          onClick={() => closeDrawer()}
          className="md:hidden"
        >
          <Icons.close />
        </Button>
      </div>
      {/* navigation items */}
      <nav className="mt-8 flex flex-col items-start space-y-10 px-6">
        {mobileNavItems?.length
          ? mobileNavItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.disabled ? "#" : (item.href as string)}
                className="customUnderline text-xl font-medium"
              >
                {item.title}
              </Link>
            ))
          : null}
      </nav>
      {children}
      {/* seperator */}
      {mobileNavItems?.length ? (
        <div className="bg-dark-300 m-6 h-[2px]" />
      ) : null}

      <div className="mt-8 w-full px-6">
        <WalletConnect />
      </div>
    </div>
  )
}

export default MobileNav
