import { promises as fs } from "fs"
import path from "path"
import type { FrameData } from "@/data/types"
import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "./types"
import { MoveTable } from "../components/MovesTable"
import { CHARACTERS } from "@/data/variables"

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

  const filePath = path.join(
    process.cwd(),
    `/app/api/characters/${character}/frames.json`
  )
  const file = await fs.readFile(filePath, "utf8")
  const data = JSON.parse(file) as FrameData
  const frames = data.framesNormal

  return <MoveTable character={character} frames={frames} />
}
