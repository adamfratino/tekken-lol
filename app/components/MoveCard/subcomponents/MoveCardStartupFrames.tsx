import { Property } from "@/ui/components"
import { MoveCardContainer } from "./MoveCardContainer"

type PropertyStartupFramesProps = {
  frames: string
}

export const MoveCardStartupFrames = ({
  frames,
}: PropertyStartupFramesProps) => (
  <MoveCardContainer title="Startup Frames">
    <Property variant="secondary">{frames}</Property>
  </MoveCardContainer>
)
