import { generateColorPalette } from "../../../lib/utils"

const DEFAULT = "#70e000" as const
const GENERATED = generateColorPalette(DEFAULT)

export const green = {
  ...GENERATED,
}
