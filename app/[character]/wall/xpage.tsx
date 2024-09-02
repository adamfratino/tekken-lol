import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { MoveTable } from "../../components/MovesTable"
import { getCharacterLabel } from "@/utils"
import type { CharacterPageProps } from "../types"

export async function generateMetadata({ params }: CharacterPageProps) {
  const { character } = params

  return {
    title: "tekken.lol : " + getCharacterLabel(character) + " : at the wall",
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
    </div>
  )
}
