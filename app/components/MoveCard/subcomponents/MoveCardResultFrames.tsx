import { Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type PropertyHitLevelsProps = Pick<GroupLayoutProps, "gap">

export const MoveCardResultFrames = ({ gap }: PropertyHitLevelsProps) => (
  <Group gap={gap} w="full">
    <MoveCardContainer title="On Block" value="-11" />
    <MoveCardContainer title="On Hit" value="1" />
    <MoveCardContainer title="On CH" value="11" />
  </Group>
)
