import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/icons"

const Hero = () => {
  return (
    <div className="mx-auto px-6 lg:px-8">
      <div className="max-w-8xl mx-auto text-center">
        <div className="mx-auto max-w-2xl">
          {/* pill banner */}
          <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-[#f92672] to-[#8e64ff] p-[2px] text-sm leading-6">
            <div className="bg-dark-700 flex h-6 items-center rounded-full p-2">
              <span>
                Learn more about the product{" "}
                <Icons.right className="ml-1 inline h-auto w-4" />
              </span>
            </div>
          </div>

          <h1 className="to-dark-200 mt-6 select-none bg-gradient-to-b from-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Powerful analytics services for your web3 dapps
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Unlock deep insights into your Web3 DApp performance with us.
            Tailored specifically for Web3 DApps, our platform provides the data
            you need to make informed decisions and drive business growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#" className="customBtn relative">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-8xl relative mx-auto mt-12 h-fit xl:mt-24">
        <Image
          src="/assets/hero.png"
          width={1414}
          height={1414}
          className="bg-dark-700 origin-top transform-gpu rounded-xl"
          alt="App Screenshot"
        />
        <div className="from-dark-700 to-dark-700/20 absolute top-0 h-full w-full rounded-xl bg-gradient-to-t" />
        <div className="heroGradient-purple absolute top-6 left-0 -z-10 h-20 w-full lg:top-0 lg:h-[390px] lg:w-[390px]" />
        <div className="heroGradient-pink absolute top-[295px] left-0 -z-10 h-8 w-full sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]" />
        <div className="heroGradient-pink absolute top-0 right-0 -z-10 hidden lg:block lg:h-[390px] lg:w-[390px]" />
        <div className="heroGradient-purple absolute top-[295px] right-0 -z-10 hidden lg:block lg:h-[290px] lg:w-[290px]" />
      </div>
    </div>
  )
}

export default Hero
