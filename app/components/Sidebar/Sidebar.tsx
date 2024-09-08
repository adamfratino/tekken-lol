import { Group, Stack, Title } from "@/ui/components"
import { CHARACTERS } from "@/data/variables"
import { Characters } from "@/data/types"
import {
  SidebarNavigation,
  type SidebarNavigationProps,
} from "./components/SidebarNavigation"

import { SidebarFooter } from "./components/SidebarFooter"

type SidebarProps = {
  character: Characters
  count?: number
} & Omit<SidebarNavigationProps, "character">

export const Sidebar = ({
  character,
  count,
  heatCount,
  punisherCount,
  wallCount,
  stancesCount,
}: SidebarProps) => {
  const characterName = CHARACTERS.filter((char) => char.value === character)[0]

  return (
    <div className="sticky hidden border-r bg-muted md:block">
      <Stack gap="sm" w="full" className="h-full max-h-screen">
        <div className="flex h-14 items-center border-b bg-yellow-medium px-6 md:h-[60px]">
          <Group gap="sm" w="full" className="items-center">
            <Title as="h2" size="xl">
              {characterName?.label}
            </Title>
            <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
              <span className="text-xs">⌘</span>J
            </kbd>
          </Group>
        </div>

        <SidebarNavigation
          character={character}
          count={count}
          heatCount={heatCount}
          punisherCount={punisherCount}
          wallCount={wallCount}
          stancesCount={stancesCount}
        />

        <SidebarFooter />
      </Stack>
    </div>
  )
}
