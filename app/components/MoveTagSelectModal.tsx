import {
  Group,
  Modal,
  Card,
  Title,
  Badge,
  type ModalProps,
} from "@/ui/components"

type MoveTagSelectProps = {
  tags: string[]
} & Pick<ModalProps, "trigger">

export function MoveTagSelectModal({ tags, trigger }: MoveTagSelectProps) {
  return (
    <Modal trigger={trigger}>
      <Group gap="md" className="flex-wrap">
        {tags.map((tag) => (
          <Card key={tag} p="xl" interactive asChild>
            <Badge shade={tag as any} className="text-foreground">
              <Title size="xl">{tag}</Title>
            </Badge>
          </Card>
        ))}
      </Group>
    </Modal>
  )
}
