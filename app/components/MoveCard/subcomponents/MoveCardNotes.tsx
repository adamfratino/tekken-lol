import { Stack, type GroupLayoutProps } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type MoveCardNotesProps = {
  notes: string
} & Pick<GroupLayoutProps, "gap">

export const MoveCardNotes = ({ gap, notes }: MoveCardNotesProps) => {
  const notesArray = notes.split("* ")

  return (
    <MoveCardContainer title="Notes">
      <Stack as="ul" gap={gap} className="ml-5 list-disc text-sm">
        {notesArray.map((note, i) => (
          <li
            key={i + note}
            className="empty:hidden"
            aria-hidden={note === "" ? true : undefined}
          >
            {note}
          </li>
        ))}
      </Stack>
    </MoveCardContainer>
  )
}
