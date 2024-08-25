import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#48cae4" as const
const GENERATED = generateColorPalette(DEFAULT)

export const aqua = {
  ...GENERATED,
}
