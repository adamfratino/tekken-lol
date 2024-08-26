import {
  Group,
  type GroupLayoutProps,
  Badge,
  type BadgeVariantProps,
} from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type PropertyHitLevelsProps = Pick<GroupLayoutProps, "gap">

export const HitLevel = ({ shade }: { shade: BadgeVariantProps["shade"] }) => (
  <Badge variant="block" size="large" shade={shade} className="capitalize">
    <p>{shade}</p>
  </Badge>
)

export const MoveCardHitLevels = ({ gap }: PropertyHitLevelsProps) => (
  <MoveCardContainer title="Hit Levels">
    <Group gap={gap}>
      <HitLevel shade="high" />
      <HitLevel shade="mid" />
      <HitLevel shade="low" />
    </Group>
  </MoveCardContainer>
)
