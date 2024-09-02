import type { Characters, FrameData } from "@/data/types"

export interface CharacterPageProps {
  params: {
    character: Characters
    frames: FrameData[]
  }
}
