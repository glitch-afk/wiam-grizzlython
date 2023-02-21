import type { DashboardNavItem, NavItem } from "@/types"

import { Icons } from "@/components/icons"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  homeNav: NavItem[]
  dashboardSideNav: DashboardNavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteRoutes = {
  root: "/",
  home: "/projects",
  login: "/login",
  register: "/register",
}

export const siteConfig: SiteConfig = {
  name: "WIAM",
  description: "Analytics for Web3",
  mainNav: [
    {
      title: "Home",
      href: siteRoutes.home,
      disabled: false,
      external: false,
    },
    {
      title: "Use Cases",
      href: "/use-cases",
      disabled: true,
      external: false,
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
      external: false,
    },
    {
      title: "Docs",
      href: "/docs",
      disabled: true,
      external: false,
    },
  ],
  dashboardSideNav: [
    {
      title: "Home",
      href: "/dashboard",
      disabled: false,
      external: false,
      icon: Icons.home,
    },
    {
      title: "Address",
      href: "#",
      disabled: false,
      external: false,
      icon: Icons.wallet,
    },
    {
      title: "Transaction",
      href: "#",
      disabled: false,
      external: false,
      icon: Icons.transation,
    },
    {
      title: "Email",
      href: "#",
      disabled: false,
      external: false,
      icon: Icons.email,
    },
    {
      title: "Heatmaps",
      href: "#",
      disabled: false,
      external: false,
      icon: Icons.eye,
    },
  ],
  homeNav: [
    {
      title: "Feeback",
      href: "/feedback",
      disabled: true,
      external: false,
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
      external: false,
    },
    {
      title: "Docs",
      href: "/docs",
      disabled: true,
      external: false,
    },
  ],
  links: {
    twitter: "https://twitter.com/0xv3n0m_",
    github: "https://github.com/glitch-afk",
    docs: "/",
  },
}
