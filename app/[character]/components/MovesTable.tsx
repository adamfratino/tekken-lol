import { Stack } from "@/ui/components"
import type { Characters } from "@/data/types"
import { Title } from "@/ui/components"
import { MoveCard } from "app/components"

type MoveTableProps = {
  frames: any[]
  character: Characters
  title?: string
}

const Headline = ({ text }: { text: string }) => (
  <Title
    as="h2"
    size="xl"
    className="border-b-background-muted sticky top-0 border-b bg-foreground px-6 py-4 text-background"
  >
    {text}
  </Title>
)

export const MoveTable = async ({
  frames,
  character,
  title,
}: MoveTableProps) => (
  <>
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
  </>
)
