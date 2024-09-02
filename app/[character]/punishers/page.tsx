import { fetchCharacterFrames, fetchCharacterPunishers } from "@/data/utils"
import { getCharacterLabel } from "@/utils"
import { MoveTable } from "../../components/MovesTable"
import type { CharacterPageProps } from "../types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : punishers",
  }
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
    </div>
  )
}
