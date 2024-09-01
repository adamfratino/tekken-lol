import { createContext, useContext } from "react"
import type { FrameData } from "@/data/types"

interface FramesContextType {
  frames: FrameData["framesNormal"]
}

export const FramesContext = createContext<FramesContextType | undefined>(
  undefined
)

export const useFrames = () => {
  const context = useContext(FramesContext)
  if (!context) {
    throw new Error("useFrames must be used within a FramesProvider")
  }
  return context
}
