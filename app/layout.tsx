import "@/styles/globals.css"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-700 text-white antialiased">{children}</body>
    </html>
  )
}
