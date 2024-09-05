"use client"

import { Search, Menu } from "lucide-react"
import { Group, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { useNavigationStore, useSearchStore } from "@/stores"
import { Characters } from "@/data/types"
import { getCharacterLabel } from "@/utils"

type HeaderProps = {
  character: Characters
}

export const Header = ({ character }: HeaderProps) => {
  const characterName = getCharacterLabel(character)

  const setActiveNav = useNavigationStore((s) => s.setActive)
  const { active: activeSearch, setActive: setActiveSearch } = useSearchStore()

  return (
    <header className="flex h-14 w-full items-center gap-3 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
      <Button
        className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md hover:bg-yellow-lighter md:hidden md:w-full md:max-w-[440px]"
        onClick={() => setActiveNav(true)}
      >
        <Menu size={16} color="black" />
      </Button>
      <Title as="h1" size="md" className="capitalize md:hidden">
        {characterName}
      </Title>
      <Group asChild gap="sm" p="md" className="ml-auto">
        <Button
          className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md hover:bg-yellow-lighter md:w-full md:max-w-[440px]"
          onClick={() => setActiveSearch(true)}
        >
          <Search size={16} color="black" />
          <Title
            as="h4"
            size="sm"
            weight="medium"
            className="hidden font-bold text-foreground md:inline"
          >
            Search for moves, characters etc.
          </Title>
          <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 md:inline-flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </Group>
    </header>
  )
}
