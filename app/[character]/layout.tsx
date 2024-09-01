import { promises as fs } from "fs"
import type { PropsWithChildren } from "react"
import type { FrameData } from "@/data/types"
import { Stack } from "@/ui/components"
import { Sidebar, Header } from "app/components"
import type { CharacterPageProps } from "./types"

export default async function CharacterLayout({
  params,
  children,
}: PropsWithChildren<CharacterPageProps>) {
  const { character } = params

  const file = await fs.readFile(
    process.cwd() + `/app/api/${character}/frames.json`,
    "utf8"
  )
  const data = JSON.parse(file) as FrameData
  const frames = data.framesNormal

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
      <Sidebar character={character} />
      <Stack>
        <Header />
        <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
          {children}
        </main>
      </Stack>
    </div>
  )
}
