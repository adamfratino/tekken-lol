import { Move } from "@/data/types"
import { Group, Stack, Flex, Title, Badge, Property } from "@/ui/components"

type SearchItemMoveProps = {
  move: Move
}

export const SearchItemMove = ({ move }: SearchItemMoveProps) => {
  const {
    name,
    command,
    block,
    hit,
    counterHit,
    hitLevel,
    tags,
    damage,
    startup,
  } = move
  const hitLevelsArray = hitLevel.split(",") || ["-"]
  const tagsArray = tags && Object.keys(tags)

  return (
    <Stack gap="xs" w="full" className="cursor-pointer">
      <div>
        {name && (
          <Title as="h4" shade="muted" weight="normal">
            {name}
          </Title>
        )}
        <Group gap="md" w="full" className="items-center">
          <Title as="h3" size="2xl" weight="semibold">
            {command}
          </Title>
          {hitLevel && (
            <Group gap="xs">
              {hitLevelsArray.map((level, i) => (
                <Badge
                  key={level + i}
                  shade={level as any}
                  className="p-[5px] text-xs"
                />
              ))}
            </Group>
          )}
          {tags && (
            <Group gap="sm" className="ml-auto">
              {tagsArray.map((tag: string, i: number) => (
                <Badge
                  key={tag + i}
                  shade={tag as any}
                  className="p-[5px] text-xs"
                />
              ))}
            </Group>
          )}
        </Group>
      </div>
      <Group gap="lg" align="between" className="md:items-center">
        <Flex
          gap={{ base: undefined, md: "sm" }}
          direction={{ base: "column", md: "row" }}
        >
          {block && (
            <Property shade="muted" size="sm">
              <strong>Block:</strong> {block}
            </Property>
          )}
          {hit && (
            <Property shade="muted" size="sm">
              <strong>Hit:</strong> {hit}
            </Property>
          )}
          {counterHit && (
            <Property shade="muted" size="sm">
              <strong>CH:</strong> {counterHit}
            </Property>
          )}
        </Flex>
        <Flex
          gap={{ base: undefined, md: "sm" }}
          direction={{ base: "column", md: "row" }}
        >
          {startup && (
            <Property shade="muted" size="sm">
              <strong>Frames:</strong> {startup}
            </Property>
          )}
          {damage && (
            <Property shade="muted" size="sm">
              <strong>Damage:</strong> {damage}
            </Property>
          )}
        </Flex>
      </Group>
    </Stack>
  )
}

export const SearchItemCharacter = ({
  character,
  count,
}: {
  character: string
  count: number
}) => {
  return (
    <Group asChild align="between" w="full">
      <Title as="h3" size="2xl" weight="semibold" className="cursor-pointer">
        {character}
      </Title>
    </Group>
  )
}
