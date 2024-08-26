import { Heart, Copy, TriangleAlert, Video } from "lucide-react"
import { Group, type GroupLayoutProps } from "@/ui/components"
import { Badge } from "@/ui/components"
import { cn } from "@/ui/lib/utils"

type InteractiveIconProps = {
  bg: string
  icon: React.ElementType
}

type MoveCardButtonsProps = Pick<GroupLayoutProps, "gap">

const InteractiveIcon = ({ bg, icon }: InteractiveIconProps) => {
  const Icon = icon

  return (
    <Badge className={cn("px-4 py-2 text-xs", bg)}>
      <Icon size={18} />
    </Badge>
  )
}

export const MoveCardButtons = ({ gap }: MoveCardButtonsProps) => (
  <Group gap={gap}>
    <InteractiveIcon bg="bg-red-light" icon={Heart} />
    <InteractiveIcon bg="bg-blue-light" icon={Copy} />
    <InteractiveIcon bg="bg-gray-dark" icon={Video} />
    <InteractiveIcon bg="bg-yellow-medium" icon={TriangleAlert} />
  </Group>
)
