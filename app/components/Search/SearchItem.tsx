import { Move } from "@/data/types"
import { Group, Stack, Title } from "@/ui/components"

type SearchItemMoveProps = {
  move: Move
}

export const SearchItemMove = ({ move }: SearchItemMoveProps) => {
  const { command, block, hit, counterHit } = move
  return (
    <Stack gap="xs">
      <Title as="h3" size="xl" weight="semibold">
        {command}
      </Title>
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
    </Stack>
  )
}
