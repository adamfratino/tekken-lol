"use client"

import { Heart, Copy, TriangleAlert, Film } from "lucide-react"
import { Group, type GroupLayoutProps } from "@/ui/components"
import { Badge } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import type { Characters, Move } from "@/data/types"
import { ReportErrorModal } from "app/components/ReportErrorModal"

type InteractiveIconProps = {
  bg: string
  className?: string
  icon: React.ElementType
  text?: string
  disabled?: boolean
  onClick?: () => void
}

const InteractiveIcon = ({
  bg,
  icon,
  text,
  className,
  disabled,
}: InteractiveIconProps) => {
  const Icon = icon

  return (
    <Group
      asChild
      gap="xs"
      className={disabled ? "cursor-not-allowed opacity-50" : undefined}
    >
      <Badge className={cn("text-black px-4 py-2 text-xs", className, bg)}>
        <Icon size={18} />
        <span className="max-sm:hidden">{text}</span>
      </Badge>
    </Group>
  )
}

type MoveCardButtonsProps = {
  gap: GroupLayoutProps["gap"]
  command: Move["command"]
  character: Characters
}

export const MoveCardButtons = ({
  gap,
  command,
  character,
}: MoveCardButtonsProps) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(
      window.location.href.split("#")[0] + "#" + command
    )
  }

  return (
    <Group gap={gap} w="full" wrap>
      <button onClick={handleCopyToClipboard} className="cursor-pointer">
        <InteractiveIcon bg="bg-aqua-medium" icon={Copy} text="Copy" />
      </button>
      <ReportErrorModal
        command={command}
        character={character}
        trigger={
          <button>
            <InteractiveIcon
              bg="bg-yellow-medium"
              icon={TriangleAlert}
              text="Report"
            />
          </button>
        }
      />
      <InteractiveIcon
        bg="bg-red-light"
        icon={Heart}
        text="Favorite"
        disabled
      />
      <InteractiveIcon bg="bg-forest-light" icon={Film} text="Watch" disabled />
    </Group>
  )
}
