import Link from "next/link"
import { Group, Modal, Card, Title, type ModalProps } from "@/ui/components"
import { cn } from "@/ui/lib/utils"

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
            asChild
            p="xl"
            interactive
            disabled={disabled}
            className={cn({
              "hover:bg-yellow-medium": !disabled,
            })}
          >
            <Link href={`/${value}`}>
              <Title size="xl">{label}</Title>
            </Link>
          </Card>
        ))}
      </Group>
    </Modal>
  )
}
