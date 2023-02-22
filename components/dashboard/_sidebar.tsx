import React from "react"

import { cn } from "@/lib/utils"
import { useDrawer } from "../drawer-views/context"
import { Icons } from "../icons"
import Logo from "../site-logo"
import Button from "../ui/button/button"

const Sidebar = ({ className }: { className?: string }) => {
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
    </aside>
  )
}

export default Sidebar
