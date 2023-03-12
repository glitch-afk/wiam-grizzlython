import "@/styles/globals.css"
import "@/styles/scrollbar.css"
import type { AppType } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import "overlayscrollbars/overlayscrollbars.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import DrawersContainer from "@/components/drawer-views/container"

import "../lib/api/events"
import { useEffect } from "react"
import { findEventsByProject } from "../lib/api/events"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const queryClient = new QueryClient()

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <DrawersContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  )
}

export default App
