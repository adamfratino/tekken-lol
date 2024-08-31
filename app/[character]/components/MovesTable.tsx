import { Stack } from "@/ui/components"
import { MoveCard } from "app/components/MoveCard"

export const MoveTable = async ({ frames }: { frames: any[] }) => {
  return (
    <main className="h-[calc(100dvh-60px)] overflow-y-scroll">
      <Stack gap={{ base: "lg", sm: "xl" }} p="lg">
        {frames.map((move) => (
          <MoveCard key={move.moveNumber + move.command} move={move} />
        ))}
      </Stack>
    </main>
  )
}
