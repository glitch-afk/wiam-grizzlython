import React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="max-w-8xl mx-auto w-full">{children}</div>
}

export default AuthLayout
