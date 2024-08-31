import { Badge, Group, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"
import { TAGS_DICTIONARY } from "@/data/variables"
import type { TagsShort } from "@/data/types"

type MoveCardTagsProps = Pick<GroupLayoutProps, "gap"> & {
  tags: TagsShort[]
}

export const MoveCardTags = ({ gap, tags }: MoveCardTagsProps) => (
  <MoveCardContainer title="Special Properties" className="flex-none">
    <Group gap={gap} wrap>
      {tags.map((tag: TagsShort) => (
        <Badge key={tag} variant="block" shade={tag}>
          {TAGS_DICTIONARY[tag]}
        </Badge>
      ))}
    </Group>
  </MoveCardContainer>
)
