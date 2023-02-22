import React from "react"
import Link from "next/link"

import { siteConfig, siteRoutes } from "@/config/site"
import { Icons } from "@/components/icons"

const Logo = () => {
  return (
    <Link href={siteRoutes.root} className="flex items-center">
      <Icons.logo className="mr-1 inline h-auto w-8" />
      <span className="text-xl font-bold">{siteConfig.name}</span>
    </Link>
  )
}

export default Logo
