import type { Characters, Move } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { Stack } from "@/ui/components"

import { MoveCard } from "../MoveCard"

import { MovesTableHeadline as Headline } from "./subcomponents/MovesTableHeadline"

type MovesTableProps = {
  moves: Move[]
  character: Characters
  title?: string
}

export const MovesTable = async ({
  moves,
  character,
  title,
}: MovesTableProps) => {
  const allMoves = await fetchCharacterFrames(character)

  return (
    <div className="sticky">
      {title && <Headline text={title} />}
      <Stack
        gap={{ base: "lg", sm: "xl" }}
        p={{ base: "sm", md: "md" }}
        w="full"
      >
        {moves.map((move) => (
          <MoveCard
            key={move.moveNumber + move.command}
            move={move}
            character={character}
            allMoves={allMoves}
          />
        ))}
      </Stack>
    </div>
  )
}
