import React from "react"
import Head from "next/head"
import Link from "next/link"

import { siteRoutes } from "@/config/site"
import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button/button"
import UserAuthForm from "@/components/user-auth-form"

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Create new Account" />
      </Head>
      <SiteHeader drawer="AUTH_NAV">
        <Link href={siteRoutes.register} className="hidden lg:flex">
          <Button variant={"subtle"} className="flex items-center">
            <Icons.upRight className="mr-2 inline h-auto w-4" />
            <span>Get Started</span>
          </Button>
        </Link>
      </SiteHeader>
      <main className="px-6 2xl:px-0">
        <div className="mt-48 flex justify-center lg:mt-52 xl:mt-56 2xl:mt-64">
          <UserAuthForm cardTitle="Log in to your Account">
            {/* <p className="text-brand-100 mt-8 text-center text-sm underline underline-offset-2">
              Forgot Password?
            </p> */}
          </UserAuthForm>
        </div>
      </main>
    </>
  )
}

export default Login
