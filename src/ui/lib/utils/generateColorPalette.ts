import { darken, lighten } from "polished"
import { hexToHsl } from "./hexToHsl"

/**
 * Creates an object with light, medium, and dark color entries.
 *
 * @param {string} color - The default HSL color string (e.g., "hsl(200, 100%, 50%)").
 * @returns {object} An object with light, medium, and dark HSL color strings.
 * @todo stronger color type (hex or hsl only)
 */
export const generateColorPalette = (color: string) => {
  let baseColor = color

  if (color.includes("#")) {
    baseColor = hexToHsl(baseColor)
  }

  return {
    lighter: lighten(0.2, color),
    light: lighten(0.1, color),
    medium: color,
    dark: darken(0.1, color),
    derker: darken(0.2, color),
  }
}
