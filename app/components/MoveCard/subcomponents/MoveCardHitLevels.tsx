import {
  Group,
  type GroupLayoutProps,
  Badge,
  type BadgeVariantProps,
} from "@/ui/components"
import type { HitLevels } from "@/data/types"
import { MoveCardContainer } from "./MoveCardContainer"

const HIT_LEVELS_DICTIONARY = {
  h: "High",
  H: "High (hits grounded)",
  m: "Mid",
  M: "Mid (hits grounded)",
  l: "Low",
  L: "Low (hits grounded)",
  t: "Throw",
  "ub(m)": "Unblockable Mid",
} as any

export const HitLevel = ({ shade }: { shade: BadgeVariantProps["shade"] }) => {
  if (!shade) return null

  return (
    <Badge variant="block" size="large" shade={shade} className="capitalize">
      <p>{HIT_LEVELS_DICTIONARY[shade]}</p>
    </Badge>
  )
}

type MoveCardHitLevelsProps = Pick<GroupLayoutProps, "gap"> & {
  hitLevels: any[]
}

export const MoveCardHitLevels = ({
  gap,
  hitLevels,
}: MoveCardHitLevelsProps) => (
  <MoveCardContainer title="Hit Levels">
    <Group gap={gap}>
      {hitLevels.map((level, i) => (
        <HitLevel key={(level as string) + i + i} shade={level} />
      ))}
    </Group>
  </MoveCardContainer>
)
