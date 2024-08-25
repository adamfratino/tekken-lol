import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#ced4da" as const
const GENERATED = generateColorPalette(DEFAULT)

export const gray = {
  ...GENERATED,
}
