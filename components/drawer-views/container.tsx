import { Fragment, useEffect } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { Dialog, Transition } from "@headlessui/react"

import { siteConfig } from "@/config/site"
import MobileNav from "../mobile-nav"
import { DRAWER_VIEW, useDrawer } from "./context"

const Sidebar = dynamic(() => import("@/components/dashboard/_sidebar"))

function renderDrawerContent(view?: DRAWER_VIEW | string) {
  switch (view) {
    case "DASHBOARD_SIDEBAR":
      return <Sidebar />
    case "MOBILE_NAV":
      return <MobileNav mobileNavItems={siteConfig.mainNav} />
    case "PROJECTS_MOBILENAV":
      return <MobileNav mobileNavItems={siteConfig.homeNav} />
    default:
      return <MobileNav />
  }
}

export default function DrawersContainer() {
  const router = useRouter()
  const { view, isOpen, closeDrawer } = useDrawer()
  useEffect(() => {
    // close search modal when route change
    router.events.on("routeChangeStart", closeDrawer)
    return () => {
      router.events.off("routeChangeStart", closeDrawer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-hidden xl:hidden"
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
          <Dialog.Overlay className="bg-brand-700/60 fixed inset-0 backdrop-blur" />
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
            {view && renderDrawerContent(view)}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
