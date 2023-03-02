import React from "react"
import { AddressData, fakeWalletAddressData } from "@/data/tableData"
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

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button/button"
import Input from "@/components/ui/input"
import Scrollbar from "@/components/ui/scrollbar"

const columnHelper = createColumnHelper<AddressData>()

const columns = [
  columnHelper.accessor("walletAddress", {
    header: () => (
      <span className="w-fit whitespace-nowrap">Wallet Address</span>
    ),
    cell: (info) => <span className="truncate">{info.getValue()}</span>,
  }),
  columnHelper.accessor("chain", {
    header: () => <span className="w-fit whitespace-nowrap">Chain</span>,
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
  columnHelper.accessor("sessions", {
    header: () => (
      <span className="w-fit whitespace-nowrap">Total Sessions</span>
    ),
    cell: (info) => <span>{info.getValue()} sessions</span>,
  }),
  columnHelper.accessor("transactionVolume", {
    header: () => (
      <span className="w-fit whitespace-nowrap">Transaction Volume</span>
    ),
    cell: (info) => <span>{info.getValue()} USDC</span>,
  }),
  columnHelper.accessor("transactionExecuted", {
    header: () => (
      <span className="w-fit whitespace-nowrap">Transaction Executed</span>
    ),
    cell: (info) => <span>{info.getValue()} tx</span>,
  }),
]

const WalletAddressTable = () => {
  const [data, _setData] = React.useState(fakeWalletAddressData)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <>
      <Scrollbar style={{ width: "100%", height: "500px" }} autoHide="scroll">
        <table className="w-full">
          <thead className="sticky top-0 rounded-lg text-sm text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-dark-500 group w-fit px-2 py-5 text-left font-normal uppercase first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6 md:px-4"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanFilter() ? (
                      <div className="mt-2">
                        <Filter column={header.column} table={table} />
                      </div>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
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
        className="bg-dark-500 text-dark-50 mt-6 flex items-center justify-between rounded-lg px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-dark-100 text-sm">
            Showing{" "}
            <span className="font-medium">
              {table.getState().pagination.pageIndex + 1}{" "}
            </span>
            of <span className="font-medium">{table.getPageCount()}</span> Pages
          </p>
        </div>
        <span className="text-dark-200 mx-4">|</span>
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
        <div className="flex flex-1 items-center justify-between space-x-2 sm:justify-end xl:space-x-4">
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
    </>
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
  }, [value])

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default WalletAddressTable
