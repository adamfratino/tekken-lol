import { fetchCharacterFrames, fetchCharacterStances } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { MoveTable, CharacterSearch, MovesSearch } from "app/components"
import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "../types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : stances",
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

  const filterFrames = (stance: any) =>
    frames.filter((move) => move.command.startsWith(stance))

  // Aggregate all moves from the filtered stances
  const allStanceMoves = filteredStances.flatMap((stance) =>
    filterFrames(stance)
  )

  return (
    <div>
      {filteredStances.map((stance) => {
        const filteredFrames = filterFrames(stance)

        return (
          <MoveTable
            key={stance}
            character={character}
            frames={filteredFrames}
            title={`${stance} Moves`}
          />
        )
      })}
      {/* Pass the aggregated moves to the Search component */}
      <MovesSearch moves={allStanceMoves} />
      <CharacterSearch />
    </div>
  )
}
