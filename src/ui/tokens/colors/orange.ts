import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#FF521B" as const

export const orange = {
  DEFAULT,
  ...generateColorPalette(DEFAULT),
}
