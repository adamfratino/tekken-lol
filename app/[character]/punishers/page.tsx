import type { CharacterPageProps } from "@/data/types"
import { CHARACTERS } from "@/data/variables"
import { fetchCharacterFrames, fetchCharacterPunishers } from "@/data/utils"
import { getCharacterLabel } from "@/utils"

import { MoveTable, CharacterSearch, MovesSearch } from "app/components"

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
      <MoveTable
        title="Standing Punishers"
        character={character}
        moves={standingPunishers}
      />
      <MoveTable
        title="Crouching Punishers"
        character={character}
        moves={crouchingPunishers}
      />
      <MovesSearch moves={[...standingPunishers, ...crouchingPunishers]} />
      <CharacterSearch />
    </div>
  )
}
