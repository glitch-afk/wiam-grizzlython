import Link from "next/link"
import React from "react"
import { Icons } from "@/components/icons"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Icons.logo className="mr-1 inline h-auto w-8" />
      <span className="text-xl font-extrabold uppercase">WIAM</span>
    </Link>
  )
}

export default Logo
