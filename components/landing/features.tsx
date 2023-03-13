import React from "react"

import { Resources } from "@/components/Card"

const FeaturesSection = () => {
  return (
    <div className="max-w-8xl mx-auto w-full pt-24 lg:pt-40">
      <h3 className="from-brand-pink to-brand-purple w-full bg-gradient-to-br bg-clip-text text-center text-2xl font-bold uppercase tracking-tight text-transparent">
        Features
      </h3>
      <div className="mx-auto mt-4 w-full max-w-4xl">
        <h2 className="to-dark-200 mx-auto max-w-2xl select-none bg-gradient-to-b from-white bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Building blocks for your business
        </h2>
        <p className="mt-6 text-center text-lg leading-relaxed tracking-wide">
          Get a deep insights into user behavior by tracking wallets,
          transactions, and customizing event tracking. With an intuitive
          dashboard, businesses can make informed decisions to scale their Web3
          operations, optimize user acquisition and retention, and drive revenue
          growth.
        </p>
      </div>
      {/* cards grid */}
      <Resources />
    </div>
  )
}

export default FeaturesSection
