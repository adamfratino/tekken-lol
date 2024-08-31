import { promises as fs } from "fs"
import type { Characters, FrameData } from "@/data/types"
import { MoveTable } from "./components/MovesTable"

interface CharacterPageProps {
  params: {
    character: Characters
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
