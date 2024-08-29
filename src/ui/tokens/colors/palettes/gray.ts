import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#a4a9ae" as const
const GENERATED = generateColorPalette(DEFAULT)

export const gray = {
  ...GENERATED,
}
