import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"
import { signOut, useSession } from "next-auth/react"

import { siteRoutes } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import Button from "@/components/ui/button"
import User from "@/components/user"

interface IMobileNavProps {
  navItems?: NavItem[]
  children?: React.ReactNode
}

const MobileNav = ({ navItems, children }: IMobileNavProps) => {
  const { data: session } = useSession()
  return (
    <div className="bg-brand-600 border-brand-400 animate-in slide-in-from-bottom-10 fade-in-25 absolute inset-0 top-[9vh] z-50 mx-4 h-fit rounded-lg border p-3 duration-500 md:hidden">
      {navItems?.length ? (
        <MainNav
          navItems={navItems}
          classes="flex items-start flex-col space-y-5 mb-6"
        />
      ) : null}

      {children}
      {!session ? (
        <div className="flex w-full flex-col space-y-2">
          <Link
            href={siteRoutes.login}
            className="border-brand-400 hover:bg-brand-400 rounded-md border py-3 text-center text-sm font-semibold transition-colors duration-300"
          >
            Log In
          </Link>

          <Link href={siteRoutes.register}>
            <Button
              color="white"
              shape="rounded"
              className="w-full text-sm font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex w-full flex-col">
          <User userClasses="mb-6 space-x-4 cursor-pointer" />
          <button
            onClick={() =>
              signOut({
                callbackUrl: `${window.location.origin}/${siteRoutes.login}`,
              })
            }
            className="border-brand-400 hover:bg-brand-400 w-full rounded-md border py-3 text-center text-sm font-semibold transition-colors duration-300"
          >
            <Icons.logout className="mr-2 inline h-auto w-5" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default MobileNav
