import React from "react"

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
      <div className="mt-20 grid w-full grid-cols-12 gap-4">
        {/* row 1 */}
        <div className="border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[438px] rounded-2xl border p-3 transition-colors duration-300 hover:opacity-100 xl:col-span-7">
          CARD #1
        </div>
        <div className="border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[438px] rounded-2xl border p-3 transition-colors duration-300 hover:opacity-100 xl:col-span-5">
          CARD #2
        </div>
        {/* row 2 */}
        <div className="border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[438px] rounded-2xl border p-3 transition-colors duration-300 hover:opacity-100">
          CARD #3
        </div>
        {/* row 3 */}
        <div className="border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[438px] rounded-2xl border p-3 transition-colors duration-300 hover:opacity-100 xl:col-span-5">
          CARD #4
        </div>
        <div className="border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[438px] rounded-2xl border p-3 transition-colors duration-300 hover:opacity-100 xl:col-span-7">
          CARD #5
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
