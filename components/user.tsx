import React from "react"
import Link from "next/link"
import { NavItem } from "@/types"
import { Item } from "@radix-ui/react-dropdown-menu"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const User = ({
  userClasses,
  navItems,
}: {
  userClasses?: string
  navItems?: NavItem[]
}) => {
  const { data: session } = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "text-brand-50 hover:outline-brand-400 flex min-w-fit cursor-pointer items-center p-1 hover:text-white hover:outline-1 focus:outline-none lg:p-2",
          userClasses
        )}
      >
        <Avatar className="h-auto w-6 sm:w-8">
          <AvatarImage src={session?.user.image as string} />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        <span className="text-sm md:hidden lg:flex">{session?.user.email}</span>
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel>Signed In as</DropdownMenuLabel>
        <DropdownMenuItem>{session?.user.name}</DropdownMenuItem>
        <DropdownMenuSeparator />
        {navItems?.length ? (
          <div className="md:hidden">
            {navItems.map((item, idx) => (
              <Link
                href={item.disabled ? "#" : (item.href as string)}
                key={idx}
              >
                <DropdownMenuItem>{item.title}</DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuSeparator />
          </div>
        ) : null}

        <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default User
