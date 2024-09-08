import { Map, Database } from "lucide-react"
import { Stack, Group, Body } from "@/ui/components"
import { RoadmapModal } from "app/components/RoadmapModal"

export const SidebarFooter = () => (
  <Stack gap="xs" p="md" className="mt-auto">
    <Group align="between" className="item-center">
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

    <Group align="between" className="item-center">
      <p className="mb-1 text-xs font-semibold">
        <Group
          asChild
          gap="xs"
          className="cursor-pointer items-center hover:underline"
        >
          <a
            href="https://tekkendocs.com"
            target="_blank"
            className="hover:underline"
          >
            <Database size={18} />
            tekkendocs.com
          </a>
        </Group>
      </p>
      <p className="fon-bold text-xs">[🏭]</p>
    </Group>
  </Stack>
)
