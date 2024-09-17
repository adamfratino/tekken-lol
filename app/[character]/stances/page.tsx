import type { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames, fetchCharacterStances } from "@/data/utils"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"

import { MovesTable, CharacterSearch, MovesSearch } from "app/components"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - stances",
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

  const moves = await fetchCharacterFrames(character)
  const stances = await fetchCharacterStances(character)

  const stancesToOmit = ["H", "SS", "FC", "FUFT", "WS"]
  const filteredStances = stances.filter(
    (stance) => !stancesToOmit.includes(stance)
  )

  const filterFrames = (stance: any) =>
    moves.filter((move) => move.command.startsWith(stance))

  // Aggregate all moves from the filtered stances
  const allStanceMoves = filteredStances.flatMap((stance) =>
    filterFrames(stance)
  )

  return (
    <div>
      {filteredStances.map((stance) => {
        const filteredFrames = filterFrames(stance)

        return (
          <MovesTable
            key={stance}
            character={character}
            moves={filteredFrames}
            title={`${stance} Moves`}
          />
        )
      })}
      <MovesSearch moves={allStanceMoves} />
      <CharacterSearch />
    </div>
  )
}
