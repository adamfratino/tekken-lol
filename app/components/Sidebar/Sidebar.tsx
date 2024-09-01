import { UserIcon } from "lucide-react"
import { Group, Stack, Title } from "@/ui/components"
import { CHARACTERS } from "@/data/variables"
import { Characters } from "@/data/types"
import { SidebarNavigation } from "./components/SidebarNavigation"

type SidebarProps = {
  character: Characters
}

export const Sidebar = ({ character }: SidebarProps) => {
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

        <SidebarNavigation character={character} />

        <div className="mt-auto px-2 font-medium">
          <p className="text-xs">tekken.lol &mdash; v0.0.1</p>
        </div>
      </Stack>
    </div>
  )
}
