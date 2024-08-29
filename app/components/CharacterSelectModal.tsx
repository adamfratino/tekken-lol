import { Group, Modal, Card, Title, type ModalProps } from "@/ui/components"

type Character = {
  label: string
  value: string
  disabled?: boolean
}

type CharacterSelectProps = {
  characters: Character[]
} & Pick<ModalProps, "trigger">

export function CharacterSelectModal({
  characters,
  trigger,
}: CharacterSelectProps) {
  return (
    <Modal trigger={trigger}>
      <Group gap="md" className="flex-wrap">
        {characters.map(({ label, value, disabled }) => (
          <Card
            key={value}
            p="xl"
            disabled={disabled}
            interactive
            className="hover:bg-yellow-medium"
          >
            <Title size="xl">{label}</Title>
          </Card>
        ))}
      </Group>
    </Modal>
  )
}
