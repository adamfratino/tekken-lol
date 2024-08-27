import { Badge, Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

const tags = [
  "Balcony Break",
  "Floor Break",
  "Heat Burst",
  "Heat Smash",
  "Heat Engager",
  "Homing Move",
  "Power Crush",
  "Tornado Move",
  "Low Crush",
  "High Crush",
  "Wall Crush",
  "Punisher",
  "Chip Damage",
  "Spike",
] as const

type MoveCardPropertiesProps = Pick<GroupLayoutProps, "gap">

export const MoveCardProperties = ({ gap }: MoveCardPropertiesProps) => (
  <MoveCardContainer title="Special Properties" className="flex-none">
    <Group gap={gap} wrap>
      {tags.map((tag) => (
        <Badge key={tag} variant="block" shade={tag as any}>
          {tag}
        </Badge>
      ))}
    </Group>
  </MoveCardContainer>
)
