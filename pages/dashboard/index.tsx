import React, { ReactElement } from "react"
import DashboardLayout from "@/layouts/_dashboard"
import { NextPageWithLayout } from "@/types"
import { signOut, useSession } from "next-auth/react"

const Dashboard: NextPageWithLayout = () => {
  const { data: session } = useSession()
  return (
    <div className="">
      <div>
        <pre>{session?.user.email}</pre>
      </div>
      <button
        className="rounded bg-purple-500 px-6 py-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
