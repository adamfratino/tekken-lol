import { MoveTable, CharacterSearch, MovesSearch } from "app/components"
import { CHARACTERS } from "@/data/variables"
import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "../types"
import { fetchCharacterFrames } from "@/data/utils"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: getCharacterLabel(character) + " - at the wall",
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

  const wcFrames = frames.filter((move) => move.tags && "wc" in move.tags)
  const bbrFrames = frames.filter((move) => move.tags && "bbr" in move.tags)

  return (
    <div>
      {wcFrames.length > 0 && (
        <MoveTable
          character={character}
          frames={wcFrames}
          title="Wall Crush moves"
        />
      )}
      <MoveTable
        character={character}
        frames={bbrFrames}
        title="Balcony Break moves"
      />
      <MovesSearch moves={[...wcFrames, ...bbrFrames]} />
      <CharacterSearch />
    </div>
  )
}
