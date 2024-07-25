import { generateColorPalette } from "@/ui/lib/utils"

const DEFAULT = "#fab005" as const
const GENERATED = generateColorPalette(DEFAULT)

export const yellow = {
  DEFAULT,
  ...GENERATED,
}
