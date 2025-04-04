import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import {
  MovesTable,
  DesktopMovesSearch,
  MobileMovesSearch,
  DesktopCharacterSearch,
  ScrollToHash,
} from "app/components"

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
    <>
      <MovesTable character={character} moves={moves} />
      <ScrollToHash />
      <DesktopMovesSearch moves={moves} />
      <MobileMovesSearch moves={moves} />
      <DesktopCharacterSearch />
    </>
  )
}
