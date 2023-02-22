import React from "react"
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts"

import { cn } from "@/lib/utils"

const data = [
  {
    name: "Page A",
    uv: 1200,
    pv: 800,
  },
  {
    name: "Page B",
    uv: 2600,
    pv: 100,
  },
  {
    name: "Page C",
    uv: 1900,
    pv: 1600,
  },
  {
    name: "Page D",
    uv: 2280,
    pv: 1508,
  },
  {
    name: "Page E",
    uv: 1290,
    pv: 3500,
  },
  {
    name: "Page F",
    uv: 1690,
    pv: 3000,
  },
  {
    name: "Page G",
    uv: 2590,
    pv: 4500,
  },
]

interface OverviewChartProps {
  chartWrapperClass?: string
  strokeColor?: string
  dataDisplay: string
  percentChange: number
}

const OverviewChart = ({
  chartWrapperClass,
  strokeColor,
  dataDisplay,
  percentChange,
}: OverviewChartProps) => {
  return (
    <div className="shadow-card min-h-fit rounded-lg bg-transparent text-white">
      {/* data */}
      <div className="flex items-baseline space-x-3 text-lg">
        <h3 className="text-xl font-medium tracking-tighter text-white sm:text-3xl">
          {dataDisplay}
        </h3>
        <span
          className={cn(
            percentChange > 0 ? "text-[#51B960]" : "text-[#FE8668]"
          )}
        >
          {percentChange > 0 ? `+${percentChange}` : `${percentChange}`}%
        </span>
      </div>
      <div className={cn("h-24 w-full", chartWrapperClass)}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="natural"
              dataKey="pv"
              stroke={strokeColor}
              strokeWidth={2}
              dot={false}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              fontSize={14}
              tickCount={3}
              minTickGap={10}
              tick={{ stroke: "#464C57" }}
              width={40}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OverviewChart
