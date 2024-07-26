import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Sidebar } from "./components/Sidebar"

export const metadata: Metadata = {
  title: "Tekken.lol",
  // twitter: {
  //   card: "summary_large_image",
  // },
  // openGraph: {
  //   url: "https://tekken.lol/",
  //   images: [
  //     {
  //       width: 1200,
  //       height: 630,
  //       url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
  //     },
  //   ],
  // },
}

export default function Web() {
  return (
    <>
      <header>
        <nav>nav</nav>
      </header>
      <main>
        <Button variant="default" size="sm">
          test
        </Button>
      </main>
      <aside>
        <Sidebar />
      </aside>
      <footer>footer</footer>
    </>
  )
}
