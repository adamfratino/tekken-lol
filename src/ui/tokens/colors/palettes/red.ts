import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#FF1F26" as const
const GENERATED = generateColorPalette(DEFAULT)

export const red = {
  ...GENERATED,
}
