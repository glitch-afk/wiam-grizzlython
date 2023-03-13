import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export type STATUS_TYPE = "SUCCESS" | "FAILED" | "DEFAULT"

interface IStatusCardProps {
  cardId: string
  cardTitle: string
  cardDescription?: string
  listingDate?: string
  status: STATUS_TYPE | string
}

const StatusCard = ({
  cardId,
  cardTitle,
  cardDescription,
  listingDate,
  status,
}: IStatusCardProps) => {
  return (
    <Link
      href={`/dashboard?id=${cardId}`}
      className="bg-dark-700/50 hover:bg-dark-700 hover:border-dark-400 border-dark-400 shadow-card col-span-1 rounded-md border p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-10 w-10 md:h-12 md:w-12">
            <AvatarImage src="" /> {/* Fetch url favicon  */}
            <AvatarFallback>{cardTitle[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-bold sm:text-lg">{cardTitle}</h3>
            <p className="text-dark-100 text-sm">
              {listingDate && `listed on ${listingDate}`}
            </p>
          </div>
        </div>
        {/* status pill */}
        <div
          className={cn(
            "bg-dark-700 rounded-full px-2 text-xs font-medium text-white md:text-sm",
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
      <p className="text-dark-100 mt-3 w-full overflow-hidden text-ellipsis break-all text-sm md:text-base">
        {cardDescription}
      </p>
    </Link>
  )
}

export default StatusCard
