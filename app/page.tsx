import { Metadata } from "next"
import { Button } from "@/components/Button/Button"

export const metadata: Metadata = {
  title: "Tekken.lol",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://tekken.lol/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <nav>nav</nav>
      </header>
      <main className="bg-white dark:bg-gray-900">main</main>
      <footer>footer</footer>
    </>
  )
}
