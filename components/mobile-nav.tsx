import React from "react"
import Link from "next/link"
import { type NavItem } from "@/types"
import { signOut, useSession } from "next-auth/react"

import { siteRoutes } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button/button"
import { useDrawer } from "./drawer-views/context"
import { Icons } from "./icons"
import Logo from "./site-logo"
import User from "./user"

interface MobileMavProps {
  mobileNavItems?: NavItem[]
  children?: React.ReactNode
}

const MobileNav = ({ mobileNavItems, children }: MobileMavProps) => {
  const { closeDrawer } = useDrawer()

  const { data: session } = useSession()

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
        {!session ? (
          <div className="flex w-full flex-col space-y-2">
            <Link
              href={siteRoutes.login}
              className="border-dark-400 hover:bg-dark-400 rounded-md border py-3 text-center text-sm font-semibold transition-colors duration-300"
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
              className="border-dark-400 hover:bg-dark-400 w-full rounded-md border py-3 text-center text-sm font-semibold transition-colors duration-300"
            >
              <Icons.logout className="mr-2 inline h-auto w-5" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileNav
