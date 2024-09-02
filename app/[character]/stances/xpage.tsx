import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { MoveTable } from "../../components/MovesTable"
import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "../types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : stances",
  }
}

export default async function CharacterHeatPage({
  params,
}: CharacterPageProps) {
  const { character } = params

  const file = await fs.readFile(
    process.cwd() + `/app/api/characters/${character}/frames.json`,
    "utf8"
  )
  const data = JSON.parse(file) as FrameData

  const frames = data.framesNormal
  const stances = data.stances

  const stancesToOmit = ["H", "SS", "FC", "FUFT", "WS"]
  const filteredStances = stances.filter(
    (stance) => !stancesToOmit.includes(stance)
  )

  return (
    <div>
      {filteredStances.map((stance) => {
        const filteredFrames = frames.filter((move) =>
          move.command.startsWith(stance)
        )

        return (
          <MoveTable
            key={stance}
            character={character}
            frames={filteredFrames}
            title={`${stance} Moves`}
          />
        )
      })}
    </div>
  )
}
