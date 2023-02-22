import React from "react"
import { signOut, useSession } from "next-auth/react"

import DashboardLayout from "@/components/dashboard/_layout"

const Dashboard = () => {
  const { data: session } = useSession()
  return (
    <DashboardLayout>
      <div>{session?.user.email}</div>
      <button onClick={() => signOut()}>Sign out</button>
    </DashboardLayout>
  )
}

export default Dashboard
