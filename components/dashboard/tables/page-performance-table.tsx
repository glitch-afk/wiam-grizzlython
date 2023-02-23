import React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

const tableItems = [
  {
    name: "Home",
    trafficShare: "24%",
  },
  {
    name: "Transaction Table",
    trafficShare: "16%",
  },
  {
    name: "Documentation",
    trafficShare: "18%",
  },
  {
    name: "About Page",
    trafficShare: "32%",
  },
  {
    name: "Overview Page",
    trafficShare: "40%",
  },
]

const PagePerformanceTable = () => {
  return (
    <ScrollArea className="h-[300px]">
      <table className="divide-brand-300 text-brand-100 min-w-full divide-y bg-transparent">
        <thead>
          <tr className="bg-brand-600/75 sticky top-0 w-full backdrop-blur">
            <th
              scope="col"
              className="w-full py-3.5 pr-3 text-left text-sm font-semibold"
            >
              Page Name
            </th>
            <th
              scope="col"
              className="pl-3\ w-full py-3.5 pr-4 text-right text-sm font-semibold"
            >
              Traffic&nbsp;Share
            </th>
          </tr>
        </thead>
        <tbody className="divide-brand-400 divide-y">
          {tableItems.map((item, idx) => (
            <tr key={idx}>
              <td className="w-full max-w-0 py-4 pr-3 text-sm font-medium text-white sm:w-auto sm:max-w-none">
                {item.name}
              </td>

              <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                <a href="#" className="text-[#9747FF]">
                  {item.trafficShare}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  )
}

export default PagePerformanceTable
