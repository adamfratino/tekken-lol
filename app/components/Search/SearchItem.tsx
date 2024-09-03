import { Move } from "@/data/types"
import { Group, Stack, Title, Badge } from "@/ui/components"

type SearchItemMoveProps = {
  move: Move
}

export const SearchItemMove = ({ move }: SearchItemMoveProps) => {
  const { name, command, block, hit, counterHit, hitLevel, tags } = move
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
      <Group gap="lg" className="items-center">
        <Group gap="sm" aria-hidden>
          {block && (
            <span className="text-sm">
              <strong>Block:</strong> {block}
            </span>
          )}
          {hit && (
            <span className="text-sm">
              <strong>Hit:</strong> {hit}
            </span>
          )}
          {counterHit && (
            <span className="text-sm">
              <strong>Counter-Hit:</strong> {counterHit}
            </span>
          )}
        </Group>
      </Group>
    </Stack>
  )
}
