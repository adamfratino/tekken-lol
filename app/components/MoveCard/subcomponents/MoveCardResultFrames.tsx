import { Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type PropertyHitLevelsProps = Pick<GroupLayoutProps, "gap"> & {
  block?: string
  hit?: string
  counterhit?: string
}

export const MoveCardResultFrames = ({
  gap,
  block,
  hit,
  counterhit,
}: PropertyHitLevelsProps) => (
  <Group gap={gap} w="full">
    {block && <MoveCardContainer title="On Block" value={block} />}
    {hit && <MoveCardContainer title="On Hit" value={hit} />}
    {counterhit && <MoveCardContainer title="On CH" value={counterhit} />}
  </Group>
)
