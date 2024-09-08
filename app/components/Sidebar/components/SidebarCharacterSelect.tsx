"use client"

import { Characters } from "@/data/types"
import { Group, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { getCharacterLabel } from "@/utils"
import { useNavigationStore } from "@/stores"

type SidebarCharacterSelectProps = {
  character: Characters
}

export const SidebarCharacterSelect = ({
  character,
}: SidebarCharacterSelectProps) => {
  const setActive = useNavigationStore((s) => s.setActive)
  const characterName = getCharacterLabel(character)

  return (
    <div className="flex h-14 cursor-pointer items-center border-b bg-yellow-medium px-6 transition duration-150 hover:bg-foreground hover:text-yellow-medium md:h-[60px]">
      <Group asChild gap="sm" w="full" className="items-center">
        <button onClick={() => setActive(true)}>
          <Title as="h2" size="xl" className="capitalize">
            {characterName}
          </Title>
          <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
            <span className="text-xs">⌘</span>J
          </kbd>
        </button>
      </Group>
    </div>
  )
}
