import { generateColorPalette } from "../../lib/utils"

const DEFAULT = "#FF521B" as const
const GENERATED = generateColorPalette(DEFAULT)

export const orange = {
  DEFAULT,
  ...GENERATED,
}
