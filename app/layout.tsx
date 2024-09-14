import { SpeedInsights } from "@vercel/speed-insights/next"
import type { PropsWithChildren } from "react"
import "@/ui/styles/globals.css"
// import { Paytone_One, Righteous } from "next/font/google"

// const brandFont = Righteous({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-brand",
// })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      // className={brandFont.variable}
    >
      <body className="flex h-[100dvh] flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
