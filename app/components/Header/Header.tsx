import { Characters, Move } from "@/data/types"
import { Group } from "@/ui/components"

import { MobileHamburgerButton } from "./subcomponents/MobileHamburgerButton"
import { MobileSearchButton } from "./subcomponents/MobileSearchButton"
import { MobileCharacterSelectButton } from "./subcomponents/MobileCharacterSelectButton"
import { DesktopCharacterSelectButton } from "./subcomponents/DesktopCharacterSelectButton"
import { DesktopSearchButton } from "./subcomponents/DesktopSearchButton"

type HeaderProps = {
  character: Characters
  moves: Move[]
}

export const Header = ({ character, moves }: HeaderProps) => (
  <header className="flex h-14 w-full items-center gap-3 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
    <MobileHamburgerButton character={character} />
    <DesktopCharacterSelectButton character={character} />

    <Group gap="sm" className="ml-auto">
      <MobileSearchButton moves={moves} />
      <DesktopSearchButton />
      <MobileCharacterSelectButton />
    </Group>
  </header>
)
