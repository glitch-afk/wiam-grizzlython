import React, { useRef, useState } from "react"
import type { NavItem } from "@/types"
import { useOnClickOutside } from "usehooks-ts"

import MobileNav from "@/components/mobile-nav"
import Logo from "@/components/site-logo"
import Hamburger from "@/components/ui/hamburger"

interface ISiteHeaderProps {
  children?: React.ReactNode
  navItems?: NavItem[]
}

const SiteHeader = ({ children, navItems }: ISiteHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = () => {
    setIsOpen(false)
  }
  useOnClickOutside(ref, handleClickOutside)

  return (
    <div className="max-w-8xl z-50 mx-auto w-full p-6 2xl:px-0">
      <div className="flex w-full items-center justify-between">
        <Logo />
        {children}
        <div className="justify-end md:hidden" ref={ref}>
          <Hamburger
            isOpen={isOpen}
            onClick={() => setIsOpen(isOpen ? false : true)}
          />
        </div>
      </div>
      {isOpen ? (
        <div className="md:hidden">
          <MobileNav navItems={navItems} ref={ref} />
        </div>
      ) : null}
    </div>
  )
}

export default SiteHeader
