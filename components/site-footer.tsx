import React from "react"

import { Icons } from "@/components/icons"
import Logo from "@/components/site-logo"
import {siteConfig} from "@/config/site"

const SiteFooter = () => {
  return (
    <footer className="max-w-8xl mx-auto">
      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-base leading-6 text-gray-300">
            Experience next generation of analytics
          </p>
        </div>
        <ul className="mt-6 flex space-x-4 lg:mt-0">
          <li className="text-dark-100 cursor-pointer hover:text-white">
            Use Cases
          </li>
          <li className="text-dark-100 cursor-pointer hover:text-white">
            Blog
          </li>
          <a href={siteConfig.links.docs} target="_blank">
          <li className="text-dark-100 cursor-pointer hover:text-white">
            Docs
          </li>
          </a>
        </ul>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          <div className="flex justify-center space-x-6 md:order-2">
            {/* <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Icons.linkedin className="hover:stroke-sky-700" />
            </a> */}
            <a href={siteConfig.links.twitter} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Icons.twitter
                className="h-6 w-6 fill-[#888888] stroke-[#888888] hover:fill-[#2AABEE] hover:stroke-[#2AABEE]"
                stroke="#888888"
              />
            </a>

            <a href={siteConfig.links.github} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Icons.gitHub />
            </a>

            {/* <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Discord</span>
              <Icons.discord />
            </a> */}
          </div>
        </div>
        <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} WIAM, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
