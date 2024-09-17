import { Map, Database } from "lucide-react"
import { Stack, Group, Body } from "@/ui/components"
import { RoadmapModal } from "app/components/RoadmapModal"

export const SidebarFooter = () => (
  <Stack gap="xs" p="md" className="mt-auto">
    <Group gap="sm" className="item-center">
      <p className="mb-1 text-xs font-semibold">
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
      <p className="fon-bold text-xs">[🦐 ⛵]</p>
    </Group>

    <Group
      gap="xs"
      className="cursor-pointer items-center text-xs font-semibold"
    >
      <Database size={18} />
      <a href="https://wavu.wiki" target="_blank" className="hover:underline">
        wavu.wiki,
      </a>
      <a
        href="https://tekkendocs.com"
        target="_blank"
        className="hover:underline"
      >
        tekkendocs
      </a>
    </Group>
  </Stack>
)
