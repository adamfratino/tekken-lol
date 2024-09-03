import { Map } from "lucide-react"
import { RoadmapModal } from "../RoadmapModal"
import Link from "next/link"
import { Group, Stack, Title } from "@/ui/components"
import { CHARACTERS } from "@/data/variables"
import { Characters } from "@/data/types"
import {
  SidebarNavigation,
  type SidebarNavigationProps,
} from "./components/SidebarNavigation"

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
        <div className="flex h-14 items-center border-b bg-yellow-medium px-6 lg:h-[60px]">
          <Group gap="sm" w="full" className="items-center">
            {/* <UserIcon size={18} /> */}
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

        <Group align="between" p="lg" className="item-center mt-auto">
          <p className="mb-1 text-sm font-semibold">
            <RoadmapModal
              trigger={
                <Group
                  asChild
                  gap="xs"
                  className="cursor-pointer items-center hover:underline"
                >
                  <span className="hover:underline">
                    <Map size={18} />
                    tekken.lol
                  </span>
                </Group>
              }
            />
          </p>
          <p className="fon-bold text-sm">[🦐 ⛵]</p>
        </Group>
      </Stack>
    </div>
  )
}
