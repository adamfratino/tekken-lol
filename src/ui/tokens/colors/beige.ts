import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#EFEFD0" as const

export const beige = {
  DEFAULT,
  ...generateColorPalette(DEFAULT),
}
