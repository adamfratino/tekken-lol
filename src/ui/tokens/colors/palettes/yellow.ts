import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#fab005" as const
const GENERATED = generateColorPalette(DEFAULT)

export const yellow = {
  ...GENERATED,
}
