import { fetchCharacterFrames, fetchCharacterStances } from "@/data/utils"
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

  const frames = await fetchCharacterFrames(character)
  const stances = await fetchCharacterStances(character)

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
