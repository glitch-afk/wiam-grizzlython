import React from "react"
import { fakeTransactionData, transactionTableData } from "@/data/tableData"
import { useQuery } from "@tanstack/react-query"
import {
  Column,
  Table,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Input from "@/components/ui/input"
import Scrollbar from "@/components/ui/scrollbar"
import { useRouter } from "next/router"
import { Event, findEventsByProject } from "@/lib/api/events"
import { useAtom } from "jotai"
import { transactionAtom } from "@/components/drawer-views/context"
import { getTokenPrice, getTransactionDetails } from "@/lib/api/price"

const columnHelper = createColumnHelper<transactionTableData>()

const columns = [
  columnHelper.accessor("data", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Transaction Id
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => <span className="truncate">{info.getValue()?.hash.substring(0, 18)}...</span>,
  }),
  columnHelper.accessor("blockchain", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Chain
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => (
      <div className="flex items-center">
        {info.getValue().toLowerCase() === "solana" ? (
          <Icons.solana className="mr-2 inline h-6 w-6" />
        ) : (
          <Icons.ethereum className="mr-2 inline h-auto w-4" />
        )}

        <span className="whitespace-nowrap capitalize">{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("amount", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Amount
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => <span>{info.getValue()} USD</span>,
  }),
  columnHelper.accessor("status", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Status
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => (
      <div
        className={cn(
          "text-dark-700 w-fit whitespace-nowrap rounded-full px-4 py-1 text-xs md:text-sm",
          info.getValue() === "SUCCESS" && "bg-green-400",
          info.getValue() === "PENDING" && "bg-yellow-500",
          info.getValue() === "FAILED" && "bg-red-500"
        )}
      >
        {info.getValue() === "SUCCESS" && (
          <Icons.check className="mr-1 inline h-auto w-4" />
        )}
        {info.getValue() === "FAILED" && (
          <Icons.slash className="mr-1 inline h-auto w-4" />
        )}
        {info.getValue() === "PENDING" && (
          <Icons.reload className="mr-1 inline h-auto w-4" />
        )}
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("type", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Type
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("source", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Source
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("description", {
    header: () => (
      <CollapsibleTrigger className="w-fit whitespace-nowrap font-semibold">
        Description
        <Icons.upDown className="text-dark-200 hover:text-dark-100 ml-2 inline h-auto w-4" />
      </CollapsibleTrigger>
    ),
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("details", {
    header: () => (
      <span className="w-fit whitespace-nowrap font-semibold">Details</span>
    ),
    cell: (info) => (
      <a
        href={info.getValue()}
        target="_blank"
        className="hover:text-brand-purple whitespace-nowrap text-xs underline underline-offset-2 md:text-sm"
        rel="noreferrer"
      >
        View Details
      </a>
    ),
  }),
]

const TransactionTable = () => {
  const { query } = useRouter()

  const [transactionEvents, setTransactionEvents] = useAtom(transactionAtom)
  
  const { data: tableData, isLoading } = useQuery({
    queryKey: ["tableData"],
    queryFn: async () => {
      console.log(query)
      return findEventsByProject(query.id as string)
        .then(async res => {
          console.log(res)
          const transactionEvents: any[] = []

          res.map(x => {
            console.log(x.name)
            if (x.name === 'transaction_executed') transactionEvents.push(x)
          })

          for(let i = 0; i < transactionEvents.length; i++) {
            const details = await getTransactionDetails(transactionEvents[i].data.hash)

            transactionEvents[i].status = details.status
            transactionEvents[i].type = details.type
            transactionEvents[i].description = details.description
            transactionEvents[i].source = details.source
            transactionEvents[i].details = `https://solana.fm/tx/${transactionEvents[i].data.hash}`

            const tokens = details.tokens

            for(let j = 0; j < tokens.length; j++) {
              const price = await getTokenPrice(tokens[j].token)
              
              transactionEvents[i].amount = price * tokens[j].amount
            }
          }

          console.log(transactionEvents, "transaction")

          setTransactionEvents(transactionEvents)

          return res
        })
        .catch(e => {
          console.log(e, 34)
        })
    },
    refetchOnWindowFocus: false,
  })

  const table = useReactTable({
    data: transactionEvents ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  if (isLoading) return <>Loading ...</>

  return (
    <div className="border-dark-400 rounded-lg border">
      <Scrollbar style={{ width: "100%", height: "500px" }} autoHide="scroll">
        <table className="w-full">
          <thead className="sticky top-0 rounded-t-lg text-sm text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-dark-500 group w-fit px-2 py-5 text-left font-normal first:rounded-tl-lg first:pl-6 last:rounded-tr-lg last:pr-6 md:px-4"
                  >
                    <Collapsible className="max-w-[16rem]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                      <CollapsibleContent className="CollapsibleContent">
                        {header.column.getCanFilter() ? (
                          <div className="mt-2">
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </CollapsibleContent>
                    </Collapsible>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-dark-500">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-dark-100 group px-2 py-5 text-left font-normal first:pl-6 last:pr-6 md:px-4"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Scrollbar>
      {/* pagination */}
      <div
        className="bg-dark-500 text-dark-50 flex items-start justify-between rounded-b-lg px-4 py-3 sm:px-6 md:items-center"
        aria-label="Pagination"
      >
        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0">
          <p className="text-dark-100 text-sm">
            Showing{" "}
            <span className="font-medium">
              {table.getState().pagination.pageIndex + 1}{" "}
            </span>
            of <span className="font-medium">{table.getPageCount()}</span> Pages
          </p>
          <span className="text-dark-200 mx-4 hidden md:block">|</span>
          <span className="text-dark-100 flex items-center gap-1 text-sm">
            Go to page
            <Input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
              className="text-dark-50 mx-2 w-24"
            />
          </span>
        </div>
        <div className="flex items-center justify-between space-x-2 sm:justify-end xl:space-x-4">
          <Button
            shape="rounded"
            variant={!table.getCanPreviousPage() ? "ghost" : "subtle"}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            shape="rounded"
            variant={!table.getCanNextPage() ? "ghost" : "subtle"}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
        />
      </div>
    </div>
  ) : (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        list={column.id + "list"}
      />
    </>
  )
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Input
      {...props}
      value={value}
      className="w-full"
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default TransactionTable
