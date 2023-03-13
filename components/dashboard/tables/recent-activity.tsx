import React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    type: "User",
    description: "A new user connect his phantom wallet",
  },
  {
    type: "Transaction",
    description:
      "A transaction of 15 SOL was performed by a user with wallet address 0x8e9hf89hf9h347hf3h4f983894g734hhnv9h8",
  },
  {
    type: "User",
    description: "A new user connect his Phantom wallet",
  },
  {
    type: "Transaction",
    description:
      "A transaction of 5 SOL was performed by a user with wallet address 0x8e9hf89hf9h347hf3h4f983894g734hhnv9h8",
  },
  {
    type: "User",
    description: "A new user connect his Phantom wallet",
  },
  {
    type: "Transaction",
    description:
      "A transaction of 15 SOL was performed by a user with wallet address 0x8e9hf89hf9h347hf3h4f983894g734hhnv9h8",
  },
  {
    type: "User",
    description: "A new user connect his Phantom wallet",
  },
  {
    type: "Transaction",
    description:
      "A transaction of 5 SOL was performed by a user with wallet address 0x8e9hf89hf9h347hf3h4f983894g734hhnv9h8",
  },
  {
    type: "User",
    description: "A new user connect his Phantom wallet",
  },
]

const RecentActivityTable = ({ activities }: { activities: any[] }) => {
  return (
    <ScrollArea className="h-[300px]">
      <table className="divide-dark-300 text-dark-100 min-w-full divide-y bg-transparent">
        <thead>
          <tr className="bg-dark-600/75 sticky top-0 backdrop-blur">
            <th
              scope="col"
              className="py-3.5 pr-3 text-left text-sm font-semibold"
            >
              Name
            </th>

            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Time
            </th>

            <th scope="col" className="relative py-3.5 pl-3">
              <span className="sr-only">Details</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-dark-400 divide-y">
          {activities.map((activity, idx) => (
            <tr key={idx}>
              <td className="w-full max-w-0 py-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none">
                <span className="text-white">
                  {activity.name.toUpperCase()}
                </span>
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only sm:hidden">Time</dt>
                  <dd className="mt-1 truncate sm:hidden">
                    {activity.createdAt} as
                  </dd>
                </dl>
              </td>

              <td className="hidden px-3 py-4 text-sm sm:table-cell">
                {new Date(activity.createdAt).toDateString()}
              </td>

              <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                <a
                  href="#"
                  className="text-[#9747FF] underline-offset-2 hover:underline"
                >
                  Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  )
}

export default RecentActivityTable
