import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#ffff3f" as const
const GENERATED = generateColorPalette(DEFAULT)

export const lime = {
  ...GENERATED,
}
