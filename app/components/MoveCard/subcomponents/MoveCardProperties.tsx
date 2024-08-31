import { Badge, Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"
import { TAGS } from "@/data/variables"

type MoveCardPropertiesProps = Pick<GroupLayoutProps, "gap">

export const MoveCardProperties = ({ gap }: MoveCardPropertiesProps) => (
  <MoveCardContainer title="Special Properties" className="flex-none">
    <Group gap={gap} wrap>
      {TAGS.map((tag) => (
        <Badge key={tag} variant="block" shade={tag as any}>
          {tag}
        </Badge>
      ))}
    </Group>
  </MoveCardContainer>
)
