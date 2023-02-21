import React, { Fragment, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import Logo from "@/components/site-logo"
import User from "@/components/user"

const SideNav = () => {
  const pathname = usePathname()
  return (
    <>
      {siteConfig.dashboardSideNav.map((item, idx) => (
        <div key={idx} className="w-full rounded-md">
          <Link
            href={item.disabled ? "#" : (item.href as string)}
            className={cn(
              "group flex items-center rounded-md p-4 text-base font-semibold",
              item.href === pathname
                ? "bg-brand-400 text-white"
                : "text-brand-200 hover:bg-brand-400 hover:text-white"
            )}
          >
            <item.icon
              className={cn(
                pathname === item.href
                  ? "text-brand-amber"
                  : "text-brand-200 group-hover:text-white",
                "mr-4 h-6 w-6 shrink-0"
              )}
              aria-hidden="true"
            />
            {item.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="bg-brand-600/60 fixed inset-0" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="bg-brand-600 relative flex w-full max-w-xs flex-1 flex-col pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <Icons.close
                        className="h-auto w-6 text-white"
                        aria-hidden={true}
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex shrink-0 items-center px-4">
                  <Logo />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-6">
                    <SideNav />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 shrink-0" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="bg-brand-600 border-r-brand-400 flex grow flex-col overflow-y-auto border-r pt-5">
            <div className="flex shrink-0 items-center px-4">
              <Logo />
            </div>
            <div className="mt-12 flex grow flex-col">
              <nav className="flex-1 space-y-4 px-5">
                <SideNav />
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="bg-brand-600 border-b-brand-600 sticky top-0 z-10 flex h-16 shrink-0 border-b">
            <button
              type="button"
              className="text-brand-200 px-4 hover:text-white focus:outline-none md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Icons.menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-end px-4">
              <div className="ml-4 flex items-center space-x-3 md:ml-6 md:space-x-6">
                <MainNav
                  navItems={siteConfig.homeNav}
                  classes="md:flex space-x-3 md:space-x-6 hidden"
                />
                <div className="flex w-full items-center space-x-3">
                  <Icons.bell className="h-auto w-4 md:w-8" />
                  {/* Profile dropdown */}
                  <User userClasses="p-2 rounded-full bg-brand-700 flex space-x-2 items-center" />
                </div>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
