import type { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  homeNav: NavItem[]
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
