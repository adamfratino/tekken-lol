"use client"

import { Copy, TriangleAlert } from "lucide-react"
import { Group, type GroupLayoutProps } from "@/ui/components"
import { ButtonSlidingText } from "@/ui/components"
import type { Characters, Move } from "@/data/types"
import { ReportErrorModal } from "app/components/ReportErrorModal"

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
      <ButtonSlidingText
        defaultText="Copy link"
        activeText="Copied!"
        icon={Copy}
        onClick={handleCopyToClipboard}
        className="bg-aqua-light"
      />
      <ReportErrorModal
        command={command}
        character={character}
        trigger={
          <ButtonSlidingText
            defaultText="Report an error"
            activeText="Thanks!"
            icon={TriangleAlert}
            className="bg-yellow-medium"
          />
        }
      />
      {/* ...other components... */}
    </Group>
  )
}
