import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "./types"
import { MoveTable } from "../components/MovesTable"
import { CHARACTERS } from "@/data/variables"
import { fetchCharacterFrames } from "@/data/utils"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : moves",
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

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { character } = params

  const frames = await fetchCharacterFrames(character)

  return <MoveTable character={character} frames={frames} />
}
