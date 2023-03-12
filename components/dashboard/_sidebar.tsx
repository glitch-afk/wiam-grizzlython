import React, { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button/button"
import { useDrawer } from "../drawer-views/context"
import { Icons } from "../icons"
import Logo from "../site-logo"
import { useRouter } from "next/router"

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  const { closeDrawer } = useDrawer()

  const { query } = useRouter()

  return (
    <aside
      className={cn(
        "bg-dark-600 border-dark-400 xs:w-80 top-0 left-0 z-40 h-full w-full max-w-full border-r xl:fixed xl:w-72 2xl:w-80",
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <Button
          title="Close"
          variant={"subtle"}
          shape={"pill"}
          onClick={() => closeDrawer()}
          className="md:hidden"
        >
          <Icons.close />
        </Button>
      </div>
      {/* navigation items */}
      <nav className="mt-4 flex flex-col space-y-4 px-6">
        {siteConfig.dashboardSideNav.map((item, idx) => (
          <Link
            key={idx}
            href={item.disabled ? "#" : (`${item.href as string}/${query.id}`)}
            className={cn(
              "text-dark-100 flex items-center rounded-md p-4 transition-all duration-300 hover:text-white",
              item.href === pathname
                ? "bg-dark-500 font-semibold text-white"
                : "hover:bg-dark-500"
            )}
          >
            <item.icon className="mr-3 h-6 w-6" />
            <span className="text-lg">{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
