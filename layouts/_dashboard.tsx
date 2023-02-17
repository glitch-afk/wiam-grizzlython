import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"

interface IDashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div className="mx-auto flex min-h-screen w-full">
      <aside className="bg-brand-600 border-r-brand-400 hidden min-h-screen w-1/6 overflow-hidden border-r px-6 md:block">
        <div className="py-6 text-center">
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="lg:hidden">
            <Icons.logo className="inline h-auto w-8" />
          </div>
        </div>
        <nav className="mt-5 flex h-full w-full flex-col items-center space-y-4">
          {siteConfig.sidebarNav.map((item, idx) => (
            <Link
              href={item.disabled ? "#" : (item.href as string)}
              className="bg-brand-500 text-brand-50 flex w-fit items-center rounded-md px-4 py-3 hover:text-white lg:w-full"
              key={idx}
            >
              <item.icon className="mr-2 inline h-auto w-5" />
              <span className="hidden text-xs sm:text-sm lg:flex">
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="w-full lg:w-5/6">
        <header className="bg-brand-600 border-b-brand-400 w-full border-b p-6">
          Header
        </header>
        <main className="mt-10 px-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
