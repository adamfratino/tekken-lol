import { fetchCharacterFrames, fetchCharacterPunishers } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"
import { MoveTable, CharacterSearch, MovesSearch } from "app/components"
import type { CharacterPageProps } from "../types"

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

  const frames = await fetchCharacterFrames(character)
  const punishers = await fetchCharacterPunishers(character)

  const standingPunishers = frames.filter(
    (move) => punishers.standing?.includes(move.command)
  )
  const crouchingPunishers = frames.filter(
    (move) => punishers.crouching?.includes(move.command)
  )

  return (
    <div>
      <MoveTable
        title="Standing Punishers"
        character={character}
        frames={standingPunishers}
      />
      <MoveTable
        title="Crouching Punishers"
        character={character}
        frames={crouchingPunishers}
      />
      <MovesSearch moves={[...standingPunishers, ...crouchingPunishers]} />
      <CharacterSearch />
    </div>
  )
}
