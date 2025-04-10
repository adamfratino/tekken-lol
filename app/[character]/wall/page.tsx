import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import {
  MovesTable,
  DesktopCharacterSearch,
  DesktopMovesSearch,
  MobileMovesSearch,
} from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - at the wall",
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

  const wcFrames = moves.filter((move) => move.tags && "wc" in move.tags)
  const bbrFrames = moves.filter((move) => move.tags && "bbr" in move.tags)

  return (
    <div>
      {wcFrames.length > 0 && (
        <MovesTable
          character={character}
          moves={wcFrames}
          title="Wall Crush moves"
        />
      )}
      <MovesTable
        character={character}
        moves={bbrFrames}
        title="Balcony Break moves"
      />
      <DesktopMovesSearch moves={[...wcFrames, ...bbrFrames]} />
      <MobileMovesSearch moves={[...wcFrames, ...bbrFrames]} />
      <DesktopCharacterSearch />
    </div>
  )
}
