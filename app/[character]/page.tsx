import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { getCharacterLabel } from "@/utils"
import { MoveTable } from "./components/MovesTable"
import type { CharacterPageProps } from "./types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : moves",
  }
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { character } = params

  const file = await fs.readFile(
    process.cwd() + `/app/api/${character}/frames.json`,
    "utf8"
  )
  const data = JSON.parse(file) as FrameData
  const frames = data.framesNormal

  return <MoveTable character={character} frames={frames} />
}
