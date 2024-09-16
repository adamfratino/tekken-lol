import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import { MoveTable, MovesSearch, CharacterSearch } from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - all moves",
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

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { character } = params

  const moves = await fetchCharacterFrames(character)

  return (
    <div>
      <MoveTable character={character} moves={moves} />
      <MovesSearch moves={moves} />
      <CharacterSearch />
    </div>
  )
}
