import React from "react"
import { OverViewCardsData } from "@/data"

import OverviewChart from "@/components/charts/overview"
import DashboardLayout from "@/components/dashboard/_layout"

const strokeColors = ["#9747FF", "#F92672", "#4DA765", "#FF8947"]

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-brand-600 border-brand-400 w-full rounded-lg border p-8">
        {/* overview cards */}
        <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {OverViewCardsData.map(
            ({ title, dataDisplay, percentChange }, idx) => (
              <div className="bg-brand-500 rounded-md p-4" key={idx}>
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
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
