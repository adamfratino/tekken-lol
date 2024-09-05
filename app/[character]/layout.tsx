import type { PropsWithChildren } from "react"
import {
  fetchCharacterFrames,
  fetchCharacterPunishers,
  fetchCharacterStances,
} from "@/data/utils"
import { Stack } from "@/ui/components"
import { Header, Sidebar } from "app/components"
import type { CharacterPageProps } from "./types"

export default async function CharacterLayout({
  params,
  children,
}: PropsWithChildren<CharacterPageProps>) {
  const { character } = params

  const allMoves = await fetchCharacterFrames(character)
  const punishers = await fetchCharacterPunishers(character)
  const stances = await fetchCharacterStances(character)

  const heatMoves = allMoves.filter(
    (move) => move.tags && ["hb", "hs", "he"].some((tag) => tag in move.tags)
  )

  const wallMoves = allMoves.filter(
    (move) => move.tags && ["bbr", "wc"].some((tag) => tag in move.tags)
  )
  const stancesToOmit = ["H", "SS", "FC", "FUFT", "WS"]
  const filteredStances = stances.filter(
    (stance) => !stancesToOmit.includes(stance)
  )
  const stancesCount = filteredStances.reduce((total, stance) => {
    const filteredFrames = allMoves.filter((move) =>
      move.command.startsWith(stance)
    )
    return total + filteredFrames.length
  }, 0)

  const allCount = allMoves.length
  const heatCount = heatMoves.length
  const punisherCount = Object.values(punishers).reduce(
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
        <Header character={character} />
        <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
          {children}
        </main>
      </Stack>
    </div>
  )
}
