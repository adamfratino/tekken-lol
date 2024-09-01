import { UserIcon } from "lucide-react"
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
    <div className="bg-muted/40 sticky hidden border-r md:block">
      <Stack gap="sm" w="full" className="h-full max-h-screen">
        <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
          <Group gap="sm" className="items-center">
            <UserIcon size={18} />
            <Title as="h2">{characterName?.label}</Title>
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

        <div className="mt-auto px-4 pb-2 font-medium">
          <p className="text-xs">
            <Link href="/">tekken.lol</Link> &mdash; v0.0.1
          </p>
        </div>
      </Stack>
    </div>
  )
}
