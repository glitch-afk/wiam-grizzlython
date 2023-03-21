import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { cn } from "@/lib/utils"

interface MainNavProps {
  mainNavClasses?: string
  mainNavItem: NavItem[]
}

const MainNav = ({ mainNavClasses, mainNavItem }: MainNavProps) => {
  return (
    <nav className={cn("", mainNavClasses)}>
      {mainNavItem.map((item, idx) => (
        <Link
          href={item.disabled ? "#" : (item.href as string)}
          key={idx}
          target="_blank"
          className="text-dark-50 text-sm font-semibold transition-colors duration-300 hover:text-white"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
