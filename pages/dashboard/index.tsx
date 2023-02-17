import React from "react"
import { signOut, useSession } from "next-auth/react"

const Dashboard = () => {
  const { data: session } = useSession()
  return (
    <>
      <div style={{ maxWidth: "60px" }}>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export default Dashboard
