import { Hero } from "./components"

export const metadata = {
  title: "welcome to tekken.lol",
  description:
    "Explore Tekken 8 frame data, punishers, heat moves, stances and more to improve your skills and get the upper hand in any matchup. Or get salty and rage-quit, that's fine too.",
  generator: "tekken.lol",
  manifest: "/manifest.json",
  keywords: ["tekken", "fighting games", "dorya"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "shrimping vessel",
      url: "https://fratino.dev/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover user-scalable=0",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
}

export default function Web() {
  return <Hero />
}
