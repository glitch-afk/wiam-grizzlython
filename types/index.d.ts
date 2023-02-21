import type { Icon } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface DashboardNavItem extends NavItem {
  icon: Icon
}
