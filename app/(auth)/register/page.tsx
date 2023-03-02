import { Icons } from "@/components/icons"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { siteRoutes } from "@/config/site"
import Link from "next/link"
import React from "react"

export const metadata = {
  title: "Register",
  description: "Create new account",
}

const RegisterPage = () => {
  return (
    <>
      <SiteHeader drawer="AUTH_NAV">
        <Link href={siteRoutes.login} className="hidden lg:flex">
          <Button variant={"subtle"} className="flex items-center">
            <Icons.upRight className="mr-2 inline h-auto w-4" />
            <span>Login</span>
          </Button>
        </Link>
      </SiteHeader>
      <main></main>
    </>
  )
}

export default RegisterPage
