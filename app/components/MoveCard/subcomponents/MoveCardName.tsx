import { MoveCardContainer } from "./MoveCardContainer"
import { Property } from "@/ui/components"

export const MoveCardName = ({ name }: { name: string }) => (
  <MoveCardContainer title="Name">
    <Property as="p" variant="tertiary">
      {name}
    </Property>
  </MoveCardContainer>
)
