import { Property } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type MoveCardDamage = {
  damage: string
}

export const MoveCardDamage = ({ damage }: MoveCardDamage) => (
  <MoveCardContainer title="Damage">
    <Property variant="secondary">{damage.replaceAll(",", ", ")}</Property>
  </MoveCardContainer>
)
