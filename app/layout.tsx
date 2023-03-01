import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import DrawersContainer from "@/components/drawer-views/container"

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
      <body className="bg-dark-700 text-white antialiased">
        {children}
        <DrawersContainer />
      </body>
    </html>
  )
}
