import { Stack } from "@/ui/components"
import type { Characters } from "@/data/types"
import { MoveCard, Search } from "app/components"

type MoveTableProps = {
  frames: any[]
  character: Characters
}

export const MoveTable = async ({ frames, character }: MoveTableProps) => {
  return (
    <>
      <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
        <Stack gap={{ base: "lg", sm: "xl" }} p="lg" w="full">
          {frames.map((move) => (
            <MoveCard
              key={move.moveNumber + move.command}
              move={move}
              character={character}
            />
          ))}
        </Stack>
      </main>
      <Search moves={frames} />
    </>
  )
}
