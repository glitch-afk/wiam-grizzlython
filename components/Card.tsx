// @ts-nocheck

import React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

const resources = [
  {
    name: "Indepth wallet & transaction tracking",
    description:
      "Our analytics tool tracks wallets and transactions for web3 products, providing insights into user behavior, trends, and opportunities for growth. Gain a comprehensive view of your users and make data-driven decisions to drive success.",
    classes: "md:col-span-6 xl:col-span-7",
    bgImage: "/assets/tracking.png",
    comingSoon: false,
  },
  {
    name: "Reward active users",
    description:
      "Incentivize active users and drive engagement with our customizable reward system. Build a loyal user base and achieve long-term success for your product.",
    classes: "md:col-span-6 xl:col-span-5",
    bgImage: "/assets/Airdrop.png",
    comingSoon: false,
  },
  {
    name: "Customizable event tracking",
    description:
      "Track user behavior and gain valuable insights with our customizable event tracking. Optimize your product's design and user experience to drive engagement and increase conversions.",
    classes: "md:col-span-6 xl:col-span-5",
    bgImage: "/assets/Customizable.png",
    comingSoon: true,
  },
  {
    name: "Accurate Heatmaps",
    description:
      "Our platform provides accurate heatmaps to help you visualize user behavior and identify areas of high engagement. With our advanced tracking technology, you can gain a deeper understanding of user behavior and optimize your product for maximum impact.",
    classes: "md:col-span-6 xl:col-span-7",
    bgImage: "/assets/Heatmaps.png",
    comingSoon: true,
  },
]

function ResourcePattern({ mouseX, mouseY, ...props }) {
  let maskImage = useMotionTemplate`radial-gradient(280px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none" {...props}>
      <motion.div
        className="from-brand-pink/5 to-brand-purple/5 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  )
}

export default function Resource({ resource, classes, bgImage }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.name}
      onMouseMove={onMouseMove}
      className={cn(
        "bg-dark-600/50 group relative col-span-full flex h-[438px] overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-black/5",
        classes
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bgImage}
        alt="feature_img"
        loading="lazy"
        className={cn(
          "absolute inset--0 mx-auto h-3/4 w-full min-w-max",
          bgImage === "/assets/Customizable.png" && "md:-left-24 lg:-left-44"
        )}
      />
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="ring-dark-400 group-hover:ring-dark-300 absolute inset-0 rounded-2xl ring-1 ring-inset" />
      <div className="bg-dark-600 absolute bottom-0 px-4 pb-4">
        <h3 className="mt-4 text-base font-semibold leading-7 text-white lg:text-2xl">
          {resource.name}
          {resource.comingSoon ? (
            <span className="bg-dark-400 ml-2 rounded-full px-2 py-1 text-xs font-semibold text-green-400">
              Coming Soom
            </span>
          ) : null}
        </h3>
        <p className="text-dark-100/70 mt-1 text-sm lg:text-base">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose mt-20 grid w-full grid-cols-12 gap-4">
        {resources.map((resource, idx) => (
          <Resource
            key={idx}
            resource={resource}
            classes={resource.classes}
            bgImage={resource.bgImage}
          />
        ))}
      </div>
    </div>
  )
}
