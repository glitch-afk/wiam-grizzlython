import React from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const User = ({ userClasses }: { userClasses?: string }) => {
  const { data: session } = useSession()
  return (
    <div
      className={cn(
        "text-brand-50 hover:outline-brand-400 flex cursor-pointer items-center p-1 hover:text-white hover:outline-1 lg:p-2",
        userClasses
      )}
    >
      <Avatar className="h-auto w-6 sm:w-8">
        <AvatarImage src={session?.user.image as string} />
        <AvatarFallback>W</AvatarFallback>
      </Avatar>
      <span className="text-sm md:hidden lg:flex">{session?.user.email}</span>
    </div>
  )
}

export default User
