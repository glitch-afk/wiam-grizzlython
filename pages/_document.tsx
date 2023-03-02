import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-dark-700 min-h-screen font-sans text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
