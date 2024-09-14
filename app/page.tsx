import type { Metadata, Viewport } from "next"
import { Hero } from "./components"

export const metadata: Metadata = {
  title: "welcome to tekken.lol",
  description:
    "Explore Tekken 8 frame data, punishers, heat moves, stances and more to improve your skills and get the upper hand in any matchup. Or get salty and rage-quit, that's fine too.",
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

export default function Web() {
  return <Hero />
}
