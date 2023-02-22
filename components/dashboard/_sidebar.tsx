import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useDrawer } from "../drawer-views/context"
import { Icons } from "../icons"
import Logo from "../site-logo"
import Button from "../ui/button/button"

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  const { closeDrawer } = useDrawer()
  return (
    <aside
      className={cn(
        "bg-brand-600 border-brand-400 xs:w-80 top-0 left-0 z-40 h-full w-full max-w-full border-r xl:fixed xl:w-72 2xl:w-80",
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <Button
          color="primary"
          shape="circle"
          title="Close"
          variant="transparent"
          size="small"
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
            href={item.disabled ? "#" : (item.href as string)}
            className={cn(
              "text-brand-100 flex items-center rounded-md px-3 py-4 transition-all duration-300 hover:text-white",
              item.href === pathname
                ? "bg-brand-400 font-semibold text-white"
                : "hover:bg-brand-400"
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
