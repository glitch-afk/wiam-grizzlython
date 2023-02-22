import React, { useState } from "react"
import { OverViewCardsData } from "@/data"
import {
  monthlyComparison,
  weeklyComparison,
  yearlyComparison,
} from "@/data/index"

import OverviewChart from "@/components/charts/overview"
import TransactionChart from "@/components/charts/transation"
import DashboardLayout from "@/components/dashboard/_layout"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const strokeColors = ["#9747FF", "#F92672", "#4DA765", "#FF8947"]

const Dashboard = () => {
  const [transactionChartData, setTransactionChartData] =
    useState(yearlyComparison)

  const handleOnChange = (value: string) => {
    switch (value) {
      case "Week":
        setTransactionChartData(weeklyComparison)
        break
      case "Month":
        setTransactionChartData(monthlyComparison)
        break
      case "Year":
        setTransactionChartData(yearlyComparison)
        break
      default:
        setTransactionChartData(yearlyComparison)
        break
    }
  }

  return (
    <DashboardLayout>
      <div className="bg-brand-600 border-brand-400 w-full rounded-lg border p-4 md:p-8">
        {/* overview cards */}
        <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {OverViewCardsData.map(
            ({ title, dataDisplay, percentChange }, idx) => (
              <div
                className="bg-brand-500 shadow-card rounded-md p-4"
                key={idx}
              >
                <span className="text-brand-50 text-sm font-semibold">
                  {title}
                </span>
                <OverviewChart
                  strokeColor={strokeColors[idx]}
                  percentChange={percentChange}
                  dataDisplay={dataDisplay}
                />
              </div>
            )
          )}
        </div>
        {/* volume chart */}
        <div>
          <div className="mt-16">
            <Select onValueChange={handleOnChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Yearly Data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Week">Weekly Data</SelectItem>
                <SelectItem value="Month">Monthly Data</SelectItem>
                <SelectItem value="Year">Yearly Data</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="3xl:h-[496px] 4xl:h-[580px] -mx-6 mt-5 h-56 sm:mt-8 md:h-96 lg:h-[416px] xl:h-[479px]">
            <TransactionChart chartData={transactionChartData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
