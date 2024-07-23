import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#FF1F26" as const

export const red = {
  DEFAULT,
  ...generateColorPalette(DEFAULT),
}
