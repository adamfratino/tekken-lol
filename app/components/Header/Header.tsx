import { Characters, Move } from "@/data/types"
import { Group } from "@/ui/components"

import {
  MobileHamburgerButton,
  MobileSearchButton,
  MobileCharacterSelectButton,
  DesktopCharacterSelectButton,
  DesktopSearchButton,
} from "./subcomponents"

type HeaderProps = {
  character: Characters
  moves: Move[]
}

export const Header = ({ character, moves }: HeaderProps) => (
  <header className="sticky top-0 z-10 flex h-14 w-full items-center gap-3 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
    <MobileHamburgerButton character={character} />
    <DesktopCharacterSelectButton character={character} />

    <Group gap="sm" className="ml-auto">
      <MobileSearchButton character={character} moves={moves} />
      <DesktopSearchButton />
      <MobileCharacterSelectButton />
    </Group>
  </header>
)
