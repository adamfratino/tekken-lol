import { promises as fs } from "fs"
import type { FrameData } from "@/data/types"
import { Stack } from "@/ui/components"
import { MoveCard } from "./MoveCard"

export const Main = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/api/feng/frames.json",
    "utf8"
  )
  const data = JSON.parse(file) as FrameData
  const frames = data.framesNormal

  return (
    <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
      <Stack gap={{ base: "lg", sm: "xl" }} p="lg">
        {frames.map((move) => (
          <MoveCard key={move.moveNumber} move={move} />
        ))}
      </Stack>
    </main>
  )
}
