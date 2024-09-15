import type { Characters, Move } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { Stack, Title } from "@/ui/components"
import { MoveCard } from "./MoveCard"

type MoveTableProps = {
  moves: Move[]
  character: Characters
  title?: string
}

const Headline = ({ text }: { text: string }) => (
  <Title
    as="h2"
    size="md"
    className="sticky top-0 z-10 bg-foreground px-4 py-2 text-sm text-background md:px-6 md:text-base"
  >
    {text}
  </Title>
)

export const MoveTable = async ({
  moves,
  character,
  title,
}: MoveTableProps) => {
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
