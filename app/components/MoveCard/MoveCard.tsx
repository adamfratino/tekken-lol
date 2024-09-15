import type { Characters, Move, TagsShort } from "@/data/types"
import {
  MoveCardCommand as Command,
  // MoveCardButtonSequence as ButtonSequence,
  MoveCardStartupFrames as StartupFrames,
  MoveCardDamage as Damage,
  MoveCardResultFrames as ResultFrames,
  MoveCardName as Name,
  MoveCardHitLevels as HitLevels,
  MoveCardTags as Tags,
  MoveCardNotes as Notes,
  MoveCardButtons as Buttons,
} from "./subcomponents"
import { Card, Group, Stack } from "@/ui/components"
import { calculateStartupFrames } from "@/utils"

const OUTER_GAP = "md"
const INNER_GAP = "sm"

type MoveCardProps = {
  move: Move
  character: Characters
  allMoves: Move[]
}

export const MoveCard = ({ move, character, allMoves }: MoveCardProps) => {
  const {
    command,
    startup,
    damage,
    block,
    hit,
    hitLevel,
    counterHit,
    name,
    tags,
    notes,
  } = move

  const hitLevelsArray = hitLevel.split(",") || ["-"]
  const tagsArray = tags && (Object.keys(tags) as TagsShort[])
  const startupFrames = calculateStartupFrames(command, allMoves)

  return (
    <Card
      id={command}
      w="full"
      p="md"
      className=" mt-12 bg-gray-lightest/25 shadow-md first:mt-4 last:mb-12"
    >
      <Group
        w="full"
        gap={OUTER_GAP}
        className="flex-col overflow-hidden rounded-md lg:flex-row"
      >
        <Stack gap={OUTER_GAP} className="w-full lg:w-2/3">
          <Command command={command} />
          {/* <ButtonSequence /> */}
          {hitLevel && <HitLevels gap={INNER_GAP} hitLevels={hitLevelsArray} />}
          {(startupFrames || damage) && (
            <Group gap={INNER_GAP} w="full">
              {startupFrames && <StartupFrames frames={startupFrames} />}
              {damage && <Damage damage={damage} />}
            </Group>
          )}
          <ResultFrames
            gap={OUTER_GAP}
            block={block}
            hit={hit}
            counterhit={counterHit}
          />
        </Stack>

        <Stack gap={OUTER_GAP} className="w-full lg:w-1/3">
          {name && <Name name={name} />}
          {tags && <Tags gap={INNER_GAP} tags={tagsArray} />}
          {notes && <Notes gap={INNER_GAP} notes={notes} />}
          <Buttons gap={INNER_GAP} command={command} character={character} />
        </Stack>
      </Group>
    </Card>
  )
}
