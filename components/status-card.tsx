import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export type STATUS_TYPE = "SUCCESS" | "FAILED" | "DEFAULT"

interface IStatusCardProps {
  cardTitle?: string
  cardDescription?: string
  listingDate?: string
  status: STATUS_TYPE | string
}

const StatusCard = ({
  cardTitle,
  cardDescription,
  listingDate,
  status,
}: IStatusCardProps) => {
  return (
    <Link
      href="#"
      className="bg-brand-500 border-brand-400 col-span-1 rounded-md border p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6 md:h-8 md:w-8">
            <AvatarImage src="" /> {/* Fetch url favicon  */}
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-bold sm:text-base">{cardTitle}</h3>
            <p className="text-brand-100 text-[11px]">
              {listingDate && `listed on ${listingDate}`}
            </p>
          </div>
        </div>
        {/* status pill */}
        <div
          className={cn(
            "bg-brand-700 rounded-full px-2 text-xs font-medium text-white md:text-sm",
            status === "SUCCESS" && "bg-green-300/30 text-green-500",
            status === "FAILED" && "bg-red-300/30 text-red-500"
          )}
        >
          {(status === "SUCCESS" && "LIVE") ||
            (status === "FAILED" && "ERROR") ||
            (status === "DEFAULT" && "SLEEPING")}
          &nbsp; •
        </div>
      </div>
      <p className="text-brand-100 mt-3 w-full overflow-hidden text-ellipsis break-all text-xs">
        {cardDescription}
      </p>
    </Link>
  )
}

export default StatusCard
