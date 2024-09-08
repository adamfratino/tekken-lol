import { Characters } from "@/data/types"
import { Title } from "@/ui/components"
import { getCharacterLabel } from "@/utils"

type DesktopCharacterSelectButtonProps = {
  character: Characters
}

export const DesktopCharacterSelectButton = ({
  character,
}: DesktopCharacterSelectButtonProps) => {
  const characterName = getCharacterLabel(character)

  return (
    <Title as="h1" size="md" className="capitalize md:hidden">
      {characterName}
    </Title>
  )
}
