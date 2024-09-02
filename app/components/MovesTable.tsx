import { Stack } from "@/ui/components"
import type { Characters, Move } from "@/data/types"
import { Title } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import { MoveCard } from "./MoveCard"
import { Search } from "./Search"

type MoveTableProps = {
  frames: Move[]
  character: Characters
  title?: string
  isSearching?: boolean
}

const Headline = ({ text }: { text: string }) => (
  <Title
    as="h2"
    size="md"
    className="sticky top-0 bg-foreground px-6 py-2 text-background"
  >
    {text}
  </Title>
)

export const MoveTable = async ({
  frames,
  character,
  title,
  isSearching,
}: MoveTableProps) => (
  <div className="sticky">
    {title && <Headline text={title} />}
    <Stack gap={{ base: "lg", sm: "xl" }} p="lg" w="full">
      {frames.map((move) => (
        <MoveCard
          key={move.moveNumber + move.command}
          move={move}
          character={character}
        />
      ))}
    </Stack>
  </div>
)
