import {
  Group,
  type GroupLayoutProps,
  Badge,
  type BadgeVariantProps,
} from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

const HIT_LEVELS_DICTIONARY = {
  h: "High",
  hh: "High (2)",
  H: "High (hits grounded)",
  m: "Mid",
  mm: "Mid (2)",
  sl: "Low (Special)",
  sm: "Mid (Special)",
  sp: "Special",
  M: "Mid (hits grounded)",
  l: "Low",
  L: "Low (hits grounded)",
  t: "Throw",
  th: "Throw",
  throw: "Throw",
  "th(h)": "Throw (High)",
  "h (th)": "Throw (High)",
  "t(c)": "Throw (Crouching)",
  "t(a)": "Throw (Air)",
  "t(s)": "Throw (Special)",
  "t(g)": "Throw (Ground)",
  "t / m": "Throw (Mid?)",
  "ub(m)": "Mid (Unblockable)",
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
    <Group gap={gap} wrap>
      {hitLevels.map((level, i) => (
        <HitLevel key={(level as string) + i} shade={level} />
      ))}
    </Group>
  </MoveCardContainer>
)
