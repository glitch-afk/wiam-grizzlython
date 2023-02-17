import React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { cn } from "@/lib/utils"

interface IMainNavProps {
  navItems?: NavItem[]
  classes?: string
}

const MainNav = ({ navItems, classes }: IMainNavProps) => {
  return (
    <>
      {navItems?.length ? (
        <nav className={cn("w-full", classes)}>
          {navItems.map((item, idx) =>
            item.external ? (
              <a
                href={item.disabled ? "#" : item.href}
                key={idx}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-50 text-sm font-semibold text-white transition-colors duration-200"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.disabled ? "#" : (item.href as string)}
                className="hover:text-brand-50 text-sm font-semibold text-white transition-colors duration-200"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      ) : null}
    </>
  )
}

export default MainNav
