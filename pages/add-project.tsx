import React from "react"
import Head from "next/head"
import Link from "next/link"

import { siteRoutes } from "@/config/site"
import AddProjectForm from "@/components/add-project-form"
import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button/button"

const AddProject = () => {
  return (
    <>
      <Head>
        <title>WIAM - Add Project</title>
        <meta name="description" content="Add new Project" />
      </Head>
      <SiteHeader drawer="AUTH_NAV">
        <Link className="hidden md:flex" href={siteRoutes.home}>
          <Button shape="rounded" variant={"subtle"}>
            <Icons.upRight className="mr-2 inline h-auto w-4" />
            All Projects
          </Button>
        </Link>
      </SiteHeader>
      <main className="max-w-8xl mx-auto w-full px-6 2xl:px-0">
        <div className="mt-48 flex justify-center lg:mt-52 xl:mt-56 2xl:mt-64">
          <AddProjectForm cardTitle="Add your Project" />
        </div>
      </main>
    </>
  )
}

export default AddProject
