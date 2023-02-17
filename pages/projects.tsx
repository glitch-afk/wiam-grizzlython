import React from "react"
import type { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import MainNav from "@/components/main-nav"
import SiteHeader from "@/components/site-header"
import StatusCard from "@/components/status-card"
import Button from "@/components/ui/button"
import User from "@/components/user"

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>WIAM - Home</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader navItems={siteConfig.homeNav}>
        <div className="hidden items-center space-x-4 md:flex">
          <MainNav
            navItems={siteConfig.homeNav}
            classes="flex space-x-4 md:space-x-10"
          />
          <Icons.bell className="h-auto w-7" />
          <User userClasses="bg-brand-500 space-x-3 rounded-full cursor-pointer" />
        </div>
      </SiteHeader>
      <main className="mx-auto w-full max-w-7xl px-6 md:mt-16 2xl:px-0">
        <div className="border-brand-500 bg-brand-600 h-fit w-full max-w-7xl rounded-xl border-2 px-6 py-12">
          {/* header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold sm:text-2xl md:text-4xl">
              Projects
            </h2>
            <Link href="/add-project">
              <Button color="white" className="font-bold">
                <Icons.plus className="mr-1 inline h-auto w-6" />
                Add Project
              </Button>
            </Link>
          </div>
          {/* project cards */}
          {projects?.length ? (
            <div className="mt-12 grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {projects?.map(({ status, title, description }, idx) => (
                <StatusCard
                  key={idx}
                  status={status}
                  cardTitle={title}
                  cardDescription={description}
                />
              ))}
            </div>
          ) : (
            <div className="mt-20 flex flex-col items-center">
              <Image
                src={"/assets/404-dark.svg"}
                alt="not_found"
                width={200}
                height={160}
              />
              <span className="text-brand-200 mt-8 text-xl font-semibold">
                No Projects Found
              </span>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default ProjectsPage

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const session = await getServerAuthSession(context)

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     }
//   }
//   return {
//     props: {
//       session,
//     },
//   }
// }
