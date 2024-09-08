import { Characters, Move } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"
import { Group, Title } from "@/ui/components"
import { getCharacterLabel } from "@/utils"

import { MobileHamburgerButton } from "./sucomponents/MobileHamburgerButton"
import { MobileSearchButton } from "./sucomponents/MobileSearchButton"
import { MobileCharacterSelectButton } from "./sucomponents/MobileCharacterSelectButton"
import { DesktopSearchButton } from "./sucomponents/DesktopSearchButton"

type HeaderProps = {
  character: Characters
  moves: Move[]
}

export const Header = async ({ character, moves }: HeaderProps) => {
  const characterName = getCharacterLabel(character)

  return (
    <header className="flex h-14 w-full items-center gap-3 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
      <MobileHamburgerButton character={character} />

      <Title as="h1" size="md" className="capitalize md:hidden">
        {characterName}
      </Title>

      <Group gap="sm" className="ml-auto">
        <MobileSearchButton moves={moves} />
        <DesktopSearchButton />
        <MobileCharacterSelectButton />
      </Group>
    </header>
  )
}
