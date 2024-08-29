import { Heart, Copy, TriangleAlert, Film } from "lucide-react"
import { Group, type GroupLayoutProps } from "@/ui/components"
import { Badge } from "@/ui/components"
import { cn } from "@/ui/lib/utils"

type InteractiveIconProps = {
  bg: string
  icon: React.ElementType
  text?: string
}

type MoveCardButtonsProps = Pick<GroupLayoutProps, "gap">

const InteractiveIcon = ({ bg, icon, text }: InteractiveIconProps) => {
  const Icon = icon

  return (
    <Group asChild gap="xs">
      <Badge className={cn("text-black px-4 py-2 text-xs", bg)}>
        <Icon size={18} />
        {text}
      </Badge>
    </Group>
  )
}

export const MoveCardButtons = ({ gap }: MoveCardButtonsProps) => (
  <Group gap={gap} w="full" className="mt-auto">
    <InteractiveIcon bg="bg-aqua-medium" icon={Copy} text="Copy" />
    <InteractiveIcon bg="bg-yellow-medium" icon={TriangleAlert} text="Report" />
    <InteractiveIcon bg="bg-red-light" icon={Heart} text="Favorite" />
    <InteractiveIcon bg="bg-forest-light" icon={Film} text="Watch" />
  </Group>
)
