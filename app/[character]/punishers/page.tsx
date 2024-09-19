import type { CharacterPageProps } from "@/data/types"
import { CHARACTERS } from "@/data/variables"
import { fetchCharacterFrames, fetchCharacterPunishers } from "@/data/utils"
import { getCharacterLabel } from "@/utils"

import {
  MovesTable,
  CharacterSearch,
  DesktopMovesSearch,
  MobileMovesSearch,
} from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - punishers",
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

export default async function CharacterPunishersPage({
  params,
}: CharacterPageProps) {
  const { character } = params

  const moves = await fetchCharacterFrames(character)
  const punishers = await fetchCharacterPunishers(character)

  const standingPunishers = moves.filter(
    (move) => punishers.standing?.includes(move.command)
  )
  const crouchingPunishers = moves.filter(
    (move) => punishers.crouching?.includes(move.command)
  )

  return (
    <div>
      <MovesTable
        title="Standing Punishers"
        character={character}
        moves={standingPunishers}
      />
      <MovesTable
        title="Crouching Punishers"
        character={character}
        moves={crouchingPunishers}
      />
      <DesktopMovesSearch
        moves={[...standingPunishers, ...crouchingPunishers]}
      />
      <MobileMovesSearch
        moves={[...standingPunishers, ...crouchingPunishers]}
      />
      <CharacterSearch />
    </div>
  )
}
