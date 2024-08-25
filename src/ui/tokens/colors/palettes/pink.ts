import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#ffb3c6" as const
const GENERATED = generateColorPalette(DEFAULT)

export const pink = {
  ...GENERATED,
}
