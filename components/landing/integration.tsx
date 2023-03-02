import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button/button"

const features = [
  {
    name: "Access real-time analytics",
    description: "with live data connections",
  },
  {
    name: "Reward active users",
    description: "with inbuilt airdrop feature",
  },
  {
    name: "Make informed decisions to scale your business",
    description: "with customizable event tracking",
  },
]

const IntegrationSection = () => {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="max-w-8xl mx-auto overflow-hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="from-brand-pink to-brand-purple bg-gradient-to-br bg-clip-text text-2xl font-bold uppercase leading-8 tracking-tight text-transparent">
                Integration
              </h2>
              <p className="to-dark-200 mt-2 max-w-md bg-gradient-to-b from-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                Seamless integration <br /> with your dapps
              </p>
              <p className="mt-6 text-lg leading-8">
                Get a deep insights into user behavior by tracking wallets,
                transactions, and customizing event tracking. With an intuitive
                dashboard, businesses can make informed decisions to scale their
                Web3 operations, optimize user acquisition and retention, and
                drive revenue growth.
              </p>
              <dl className="mt-10 mb-8 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <Icons.checkCircle
                        aria-hidden="true"
                        className="text-dark-700 absolute top-1 left-1 h-6 w-6 fill-green-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="text-dark-100 inline">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <Button variant={"subtle"} shape="pill" size={"lg"}>
                Learn More
                <Icons.right className="ml-2 inline h-auto w-5" />
              </Button>
            </div>
          </div>
          <Image
            src="/assets/hero.png"
            alt="App screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default IntegrationSection
