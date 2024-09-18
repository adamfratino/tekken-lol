import { Stack } from "@/ui/components"
import { CHARACTERS } from "@/data/variables"
import { Characters } from "@/data/types"
import {
  SidebarNavigation,
  type SidebarNavigationProps,
} from "./components/SidebarNavigation"
import { SidebarCharacterSelect } from "./components/SidebarCharacterSelect"
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
  throwsCount,
  wallCount,
  stancesCount,
}: SidebarProps) => {
  const characterName = CHARACTERS.filter((char) => char.value === character)[0]

  return (
    <div className="sticky hidden border-r bg-muted md:block">
      <Stack gap="sm" w="full" className="h-full max-h-screen">
        <SidebarCharacterSelect character={character} />

        <SidebarNavigation
          character={character}
          count={count}
          heatCount={heatCount}
          throwsCount={throwsCount}
          punisherCount={punisherCount}
          wallCount={wallCount}
          stancesCount={stancesCount}
        />

        <SidebarFooter />
      </Stack>
    </div>
  )
}
