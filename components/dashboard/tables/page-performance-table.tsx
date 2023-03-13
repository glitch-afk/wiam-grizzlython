import React, { useEffect, useState } from "react"

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

const PagePerformanceTable = ({ pageViews }: { pageViews: any[] }) => {
  const [page, setPage] = useState<any[]>([])

  useEffect(() => {
    let mapping: any = {}

    pageViews.map((x) => {
      if (mapping[x.data.url]) mapping[x.data.url].views += 1
      else {
        mapping[x.data.url] = {
          ...x,
          views: 1,
        }
      }
    })

    setPage(Object.values(mapping))
  }, [pageViews])

  useEffect(() => console.log(page, "page"), [page])

  return (
    <ScrollArea className="h-[300px]">
      <table className="divide-dark-300 text-dark-100 min-w-full divide-y bg-transparent">
        <thead>
          <tr className="bg-dark-600/75 sticky top-0 w-full backdrop-blur">
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
              Page&nbsp;Views
            </th>
          </tr>
        </thead>
        <tbody className="divide-dark-400 divide-y">
          {page.map((item, idx) => (
            <tr key={idx}>
              <td className="w-full max-w-0 py-4 pr-3 text-sm font-medium text-white sm:w-auto sm:max-w-none">
                {item.data.url}
              </td>

              <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                <a href="#" className="text-[#9747FF]">
                  {item.views}
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
