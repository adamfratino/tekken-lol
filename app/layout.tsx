import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import type { PropsWithChildren } from "react"
// import { Paytone_One, Righteous } from "next/font/google"

import "@/ui/styles/globals.css"

export const metadata: Metadata = {
  title: "welcome to tekken.lol",
  description:
    "Explore Tekken 8 frame data, punishers, heat moves, stances and more to improve your skills and get the upper hand in any matchup. Or get salty and rage-quit, that's fine too.",
  metadataBase: new URL("https://tekken.lol"),
  generator: "tekken.lol",
  manifest: "/manifest.json",
  keywords: ["tekken", "fighting games", "dorya"],
  authors: [
    {
      name: "shrimping vessel",
      url: "https://fratino.dev/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
}

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
