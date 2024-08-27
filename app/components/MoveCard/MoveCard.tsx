import { Card, Group, Stack } from "@/ui/components"
import {
  MoveCardCommand as Command,
  MoveCardButtonSequence as ButtonSequence,
  MoveCardStartupFrames as StartupFrames,
  MoveCardDamage as Damage,
  MoveCardResultFrames as ResultFrames,
  MoveCardName as Name,
  MoveCardHitLevels as HitLevels,
  MoveCardProperties as SpecialProperties,
  MoveCardNotes as Notes,
  MoveCardButtons as Buttons,
} from "./subcomponents"

const OUTER_GAP = "md"
const INNER_GAP = "sm"

export type Move = {
  moveNumber: number
  command: string
  name: string
  hitLevel: string
  damage: string
  startup: string
  block: string
  hit: string
  counterHit: string
  notes: string
  wavuId: string
  tags: any
}

export const MoveCard = ({ move }: { move: Move }) => {
  const { command, startup, damage, block, hit, counterHit } = move

  return (
    <Card w="full" p="md" className="bg-gray-light/25 shadow-sm">
      <Group w="full" gap={OUTER_GAP} className="overflow-hidden rounded-md">
        <Stack gap={OUTER_GAP} className="w-2/3">
          <Command command={command} />
          <ButtonSequence />
          <HitLevels gap={INNER_GAP} />
          <Group gap={INNER_GAP} w="full">
            <StartupFrames frames={startup} />
            <Damage damage={damage} />
          </Group>
          <ResultFrames
            gap={OUTER_GAP}
            block={block}
            hit={hit}
            counterhit={counterHit}
          />
        </Stack>

        <Stack gap={OUTER_GAP} className="w-1/3">
          <Name />
          <SpecialProperties gap={INNER_GAP} />
          <Notes gap={INNER_GAP} />
          <Buttons gap={INNER_GAP} />
        </Stack>
      </Group>
    </Card>
  )
}
