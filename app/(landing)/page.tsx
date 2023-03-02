import FeaturesSection from "@/components/features"
import Hero from "@/components/hero"
import IntegrationSection from "@/components/integration"
import SiteFooter from "@/components/site-footer"
import Link from "next/link"
import React from "react"

const LandingPage = () => {
  return (
    <div className="relative pb-12 pt-24 sm:pt-32 lg:pb-16">
      <Hero />
      {/* feature section */}
      <FeaturesSection />
      {/* Integration Section */}
      <IntegrationSection />
      {/* onboarding */}
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="to-dark-200 mx-auto max-w-3xl bg-gradient-to-b from-white bg-clip-text text-3xl font-extrabold text-transparent lg:text-6xl">
          Ready to take your data analysis to the next level?
        </h2>
        <p className="text-dark-100 mx-auto mt-6 max-w-lg text-xl leading-6 tracking-wide">
          Maximize your business&apos;s potential with data-driven insights.
          Sign up for our analytics service now and get the edge you need to
          outpace the competition.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#" className="customBtn relative">
            Get Started
          </Link>
        </div>
      </div>
      {/* footer */}
      <SiteFooter />
    </div>
  )
}

export default LandingPage
