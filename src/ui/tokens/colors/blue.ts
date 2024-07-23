import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#226CE0" as const

export const blue = {
  DEFAULT,
  ...generateColorPalette(DEFAULT),
}
