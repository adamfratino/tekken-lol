import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import {
  MovesTable,
  MobileMovesSearch,
  DesktopMovesSearch,
  CharacterSearch,
} from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - heat moves",
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

  const moves = await fetchCharacterFrames(character)

  const hbFrames = moves!.filter((move) => move.tags && "hb" in move.tags)
  const hsFrames = moves!.filter((move) => move.tags && "hs" in move.tags)
  const heFrames = moves!.filter((move) => move.tags && "he" in move.tags)

  return (
    <div>
      <MovesTable character={character} moves={hbFrames} title="Heat Burst" />
      <MovesTable character={character} moves={hsFrames} title="Heat Smash" />
      <MovesTable
        character={character}
        moves={heFrames}
        title="Heat Engager moves"
      />
      <DesktopMovesSearch moves={[...hbFrames, ...hsFrames, ...heFrames]} />
      <MobileMovesSearch moves={[...hbFrames, ...hsFrames, ...heFrames]} />
      <CharacterSearch />
    </div>
  )
}
