import React from "react"
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

const User = ({ userClasses }: { userClasses?: string }) => {
  const { data: session } = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "text-brand-50 disabled hover:outline-brand-400 flex min-w-fit cursor-pointer items-center p-1 hover:text-white hover:outline-1 lg:p-2",
          userClasses
        )}
      >
        <Avatar className="h-auto w-6 sm:w-8">
          <AvatarImage src={session?.user.image as string} />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        <span className="text-sm md:hidden lg:flex">{session?.user.name}</span>
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel>Email</DropdownMenuLabel>
        <DropdownMenuItem>{session?.user.email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default User
