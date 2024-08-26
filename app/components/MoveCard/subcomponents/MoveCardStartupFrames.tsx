import { Property, Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type PropertyStartupFramesProps = Pick<GroupLayoutProps, "gap">

export const MoveCardStartupFrames = ({ gap }: PropertyStartupFramesProps) => (
  <Group gap={gap} w="full">
    <MoveCardContainer title="Startup Frames">
      <Property variant="secondary">10, 10, 12</Property>
    </MoveCardContainer>
    <MoveCardContainer title="Damage">
      <Property variant="secondary">8, 9, 11</Property>
    </MoveCardContainer>
  </Group>
)
