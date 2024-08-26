import { Card, Group, Stack } from "@/ui/components"
import {
  MoveCardCommand as Command,
  MoveCardButtonSequence as ButtonSequence,
  MoveCardStartupFrames as StartupFrames,
  MoveCardResultFrames as ResultFrames,
  MoveCardName as Name,
  MoveCardHitLevels as HitLevels,
  MoveCardSpecialProperties as SpecialProperties,
  MoveCardNotes as Notes,
  MoveCardButtons as Buttons,
} from "./subcomponents"

const OUTER_GAP = "md"
const INNER_GAP = "sm"

export const MoveCard = () => (
  <Card w="full" p="md" className="bg-gray-light/25 shadow-sm">
    <Group w="full" gap={OUTER_GAP} className="overflow-hidden rounded-md">
      <Stack gap={OUTER_GAP} className="w-2/3">
        <Command />
        <ButtonSequence />
        <HitLevels gap={INNER_GAP} />
        <StartupFrames gap={OUTER_GAP} />
        <ResultFrames gap={OUTER_GAP} />
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
