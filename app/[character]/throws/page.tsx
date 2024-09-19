import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterThrows } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import {
  MovesTable,
  DesktopMovesSearch,
  CharacterSearch,
  MobileMovesSearch,
} from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - throws",
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

export default async function ThrowsPage({ params }: CharacterPageProps) {
  const { character } = params

  const moves = await fetchCharacterThrows(character)

  return (
    <>
      <MovesTable character={character} moves={moves} />
      <DesktopMovesSearch moves={moves} />
      <MobileMovesSearch moves={moves} />
      <CharacterSearch />
    </>
  )
}
