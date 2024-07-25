import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#226CE0" as const
const GENERATED = generateColorPalette(DEFAULT)

export const blue = {
  DEFAULT,
  ...GENERATED,
}
