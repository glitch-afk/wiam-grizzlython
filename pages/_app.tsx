import "@/styles/globals.css"
import type { AppProps, AppType } from "next/app"
import { NextPageWithLayout } from "@/types"
import { Inter as FontSans } from "@next/font/google"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  )
}

export default App
