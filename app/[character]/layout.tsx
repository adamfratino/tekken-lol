import { promises as fs } from "fs"
import type { PropsWithChildren } from "react"
import type { FrameData, PunishersType } from "@/data/types"
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
  const punisherFile = await fs.readFile(
    process.cwd() + `/app/api/${character}/punishers.json`,
    "utf8"
  )
  const data = JSON.parse(file) as FrameData
  const punisherData = JSON.parse(punisherFile) as PunishersType
  const moves = data.framesNormal
  const stances = data.stances

  const heatMoves = moves.filter(
    (move) => move.tags && ["hb", "hs", "he"].some((tag) => tag in move.tags)
  )

  const wallMoves = moves.filter(
    (move) => move.tags && ["bbr", "wc"].some((tag) => tag in move.tags)
  )
  const stancesCount = stances.reduce((total, stance) => {
    const filteredFrames = moves.filter((move) =>
      move.command.startsWith(stance)
    )
    return total + filteredFrames.length
  }, 0)

  const allCount = moves.length
  const heatCount = heatMoves.length
  const punisherCount = Object.values(punisherData).reduce(
    (total, arr) => total + arr.length,
    0
  )
  const wallCount = wallMoves.length

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
      <Sidebar
        character={character}
        count={allCount}
        heatCount={heatCount}
        punisherCount={punisherCount}
        wallCount={wallCount}
        stancesCount={stancesCount}
      />
      <Stack>
        <Header />
        <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
          {children}
        </main>
      </Stack>
    </div>
  )
}
