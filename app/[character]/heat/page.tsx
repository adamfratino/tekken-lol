import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"
import { MoveTable, Search } from "app/components"
import type { CharacterPageProps } from "../types"
import { fetchCharacterFrames } from "@/data/utils"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : heat",
  }
}

export async function generateStaticParams() {
  return CHARACTERS.map(
    ({ value, disabled }) =>
      !disabled && {
        character: value,
      }
  )
}

export default async function CharacterHeatPage({
  params,
}: CharacterPageProps) {
  const { character } = params

  const frames = await fetchCharacterFrames(character)

  const hbFrames = frames!.filter((move) => move.tags && "hb" in move.tags)
  const hsFrames = frames!.filter((move) => move.tags && "hs" in move.tags)
  const heFrames = frames!.filter((move) => move.tags && "he" in move.tags)

  return (
    <div>
      <MoveTable character={character} frames={hbFrames} title="Heat Burst" />
      <MoveTable character={character} frames={hsFrames} title="Heat Smash" />
      <MoveTable
        character={character}
        frames={heFrames}
        title="Heat Engager moves"
      />
      <Search moves={[...hbFrames, ...hsFrames, ...heFrames]} />
    </div>
  )
}
