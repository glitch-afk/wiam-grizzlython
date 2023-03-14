import React from "react"
import {
  monthlyComparison,
  weeklyComparison,
  yearlyComparison,
} from "@/data/index"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const TransactionChart = ({ chartData }: { chartData: any }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9747FF" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#9747FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="10 5"
          vertical={false}
          stroke="#464C57"
        />
        <XAxis
          dataKey="name"
          tick={{ stroke: "#464C57" }}
          axisLine={false}
          tickLine={false}
          fontSize={14}
        />
        <YAxis
          tick={{ stroke: "#464C57" }}
          axisLine={false}
          tickLine={false}
          fontSize={14}
        />
        <Area
          type="monotone"
          dataKey="sessions"
          stroke="#9747FF"
          fill="url(#colorUv)"
        />
        <Tooltip
          contentStyle={{
            background: "#15181E",
            border: "none",
            borderRadius: "8px",
            outline: "none",
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TransactionChart
