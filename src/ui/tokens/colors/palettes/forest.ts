import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#38b000" as const
const GENERATED = generateColorPalette(DEFAULT)

export const forest = {
  ...GENERATED,
}
