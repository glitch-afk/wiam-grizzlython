import React from "react"
import Head from "next/head"
import Link from "next/link"

import { siteRoutes } from "@/config/site"
import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import Button from "@/components/ui/button"
import UserAuthForm from "@/components/user-auth-form"

const Register = () => {
  return (
    <>
      <Head>
        <title>WIAM - Register</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader>
        <Link className="hidden md:flex" href={siteRoutes.login}>
          <Button shape="rounded">
            <Icons.login className="mr-2 h-auto w-4" />
            Log in
          </Button>
        </Link>
      </SiteHeader>
      <main className="max-w-8xl mx-auto w-full px-6 2xl:px-0">
        <div className="mt-48 flex justify-center lg:mt-52 xl:mt-56 2xl:mt-64">
          <UserAuthForm cardTitle="Create your Account">
            <p className="text-brand-100 mt-8 text-center text-sm">
              You acknowledge that you read, and agree to our&nbsp;
              <span className="text-brand-100 font-semibold underline">
                Terms of Service
              </span>
              &nbsp;and our&nbsp;
              <span className="text-brand-100 font-semibold underline">
                Privacy Policy
              </span>
            </p>
          </UserAuthForm>
        </div>
      </main>
    </>
  )
}

export default Register
