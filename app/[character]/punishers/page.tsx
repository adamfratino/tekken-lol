import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { Stack, Title } from "@/ui/components"
import { MoveTable } from "../components/MovesTable"
import { getCharacterLabel } from "@/utils"
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
    <Stack gap="xl" w="full">
      <Stack gap="md">
        <MoveTable
          title="Standing Punishers"
          character={character}
          frames={standingPunishers}
        />
      </Stack>

      <Stack gap="md">
        <MoveTable
          title="Crouching Punishers"
          character={character}
          frames={crouchingPunishers}
        />
      </Stack>
    </Stack>
  )
}
