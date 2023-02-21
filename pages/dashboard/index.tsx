import React from "react"
import Layout from "@/layouts/_dashboard"
import { signOut, useSession } from "next-auth/react"

const Dashboard = () => {
  return (
    <Layout>
      <button onClick={() => signOut()}>Sign out</button>
    </Layout>
  )
}

export default Dashboard
