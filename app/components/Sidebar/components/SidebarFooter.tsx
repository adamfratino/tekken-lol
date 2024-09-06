import { Map } from "lucide-react"
import { Group } from "@/ui/components"
import { RoadmapModal } from "app/components/RoadmapModal"

export const SidebarFooter = () => (
  <Group align="between" p="lg" className="item-center mt-auto">
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
)
