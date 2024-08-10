import { Metadata } from "next"
import { Group } from "@/ui/components"

export const metadata: Metadata = {
  title: "Tekken.lol",
}

export default function Web() {
  return (
    <>
      <header>
        <nav>nav</nav>
      </header>
      <main>
        <Group gap="sm">
          <div className="bg-red-medium">foo</div>
          <div className="bg-red-medium">bar</div>
        </Group>
      </main>
      <footer>footer</footer>
    </>
  )
}
