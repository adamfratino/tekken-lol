import { Stack, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type MoveCardNotesProps = Pick<GroupLayoutProps, "gap">

export const MoveCardNotes = ({ gap }: MoveCardNotesProps) => (
  <MoveCardContainer title="Notes" className="h-full">
    <Stack as="ul" gap={gap} className="ml-5 list-disc text-sm">
      <li>
        Absorb an attack to power up, which adds 8 chip damage when guarded
      </li>
      <li>Balcony Break</li>
      <li>Power crush 8~</li>
    </Stack>
  </MoveCardContainer>
)
