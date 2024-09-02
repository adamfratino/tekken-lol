import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
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

  const framesFile = await fs.readFile(
    process.cwd() + `/app/api/${character}/frames.json`,
    "utf8"
  )
  const punishersFile = await fs.readFile(
    process.cwd() + `/app/api/${character}/punishers.json`,
    "utf8"
  )
  const framesData = JSON.parse(framesFile) as FrameData
  const punishersData = JSON.parse(punishersFile) as any

  const frames = framesData.framesNormal

  const standingPunishers = frames.filter((move) =>
    punishersData.standing.includes(move.command)
  )
  const crouchingPunishers = frames.filter((move) =>
    punishersData.crouching.includes(move.command)
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
