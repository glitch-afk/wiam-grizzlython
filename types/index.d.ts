import { ReactNode, type ReactElement } from "react"
import { NextPage } from "next"

import type { Icon } from "@/components/icons"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface dashboardNavItem {
  icon: Icon
  title: string
  href?: string
  disabled?: boolean
}
