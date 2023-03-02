"use client"

import dynamic from "next/dynamic"
import React, { Fragment, useEffect } from "react"
import { type DRAWER_VIEW, useDrawer } from "./context"
import { Transition, Dialog } from "@headlessui/react"
import { usePathname, useSearchParams } from "next/navigation"
import { siteConfig } from "@/config/site"
const MobileNav = dynamic(() => import("@/components/mobile-nav"))

function renderDrawerContent(view?: DRAWER_VIEW | string) {
  switch (view) {
    case "DASHBOARD_SIDEBAR":
      return null
    case "MOBILE_NAV":
      return <MobileNav mobileNavItems={siteConfig.mainNav} />
    case "PROJECTS_MOBILENAV":
      return <MobileNav />
    default:
      return <MobileNav />
  }
}

const DrawersContainer = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { view, isOpen, closeDrawer } = useDrawer()
  useEffect(() => {
    // close search modal when route change
    closeDrawer
    return () => {
      closeDrawer
    }
  }, [closeDrawer, pathname, searchParams]) // workaround for router change events

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-hidden lg:hidden"
        onClose={closeDrawer}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="bg-dark-700/60 fixed inset-0 backdrop-blur" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="xs:w-auto fixed inset-y-0 left-0 flex w-full max-w-full">
            {view ? renderDrawerContent(view) : renderDrawerContent()}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default DrawersContainer
