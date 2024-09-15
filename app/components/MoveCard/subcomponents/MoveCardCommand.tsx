import { Property } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type MoveCardProps = {
  command: string
}

export const MoveCardCommand = ({ command }: MoveCardProps) => (
  <MoveCardContainer title="Command">
    <Property as="p" variant="primary">
      {command.replaceAll(",", ", ")}
    </Property>
  </MoveCardContainer>
)
