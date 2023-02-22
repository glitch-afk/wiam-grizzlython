import React from "react"

import { cn } from "@/lib/utils"
import Header from "./_header"
import Sidebar from "./_sidebar"

const DashboardLayout = ({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) => {
  return (
    <div className="xl:pl-72 2xl:pl-80">
      <Header />
      <Sidebar className="hidden xl:block" />
      <main
        className={cn(
          "3xl:px-10 3xl:pt-0.5 min-h-[100vh] px-4 pt-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:pb-24",
          contentClassName
        )}
      >
        {children}
      </main>
    </div>
  )
}
export default DashboardLayout
