import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#20c997" as const
const GENERATED = generateColorPalette(DEFAULT)

export const teal = {
  DEFAULT,
  ...GENERATED,
}
