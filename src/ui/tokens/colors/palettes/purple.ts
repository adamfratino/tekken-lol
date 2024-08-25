import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#d100d1" as const
const GENERATED = generateColorPalette(DEFAULT)

export const purple = {
  ...GENERATED,
}
