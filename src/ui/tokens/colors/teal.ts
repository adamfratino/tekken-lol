import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#20c997" as const

export const teal = {
  DEFAULT,
  ...generateColorPalette(DEFAULT),
}
