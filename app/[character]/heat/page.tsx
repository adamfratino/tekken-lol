import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { getCharacterLabel } from "@/utils"
import { MoveTable } from "../../components/MovesTable"
import type { CharacterPageProps } from "../types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : heat",
  }
}

export default async function CharacterHeatPage({
  params,
}: CharacterPageProps) {
  const { character } = params

  const file = await fs.readFile(
    process.cwd() + `/public/data/characters/${character}/frames.json`,
    "utf8"
  )
  const data = JSON.parse(file) as FrameData

  const frames = data.framesNormal

  const hbFrames = frames.filter((move) => move.tags && "hb" in move.tags)
  const hsFrames = frames.filter((move) => move.tags && "hs" in move.tags)
  const heFrames = frames.filter((move) => move.tags && "he" in move.tags)

  return (
    <div>
      <MoveTable character={character} frames={hbFrames} title="Heat Burst" />
      <MoveTable character={character} frames={hsFrames} title="Heat Smash" />
      <MoveTable
        character={character}
        frames={heFrames}
        title="Heat Engager moves"
      />
    </div>
  )
}
