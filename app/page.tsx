import { Metadata } from "next"
import { Sidebar } from "./components/Sidebar"
import { Group } from "@/ui/components"

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
        <Group gap={6} className="bg-blue-medium">
          <div className="bg-red-medium">foo</div>
          <div className="bg-red-medium">bar</div>
        </Group>
      </main>
      <footer>footer</footer>
    </>
  )
}
