import { lighten, darken } from "polished"
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
    light: lighten(0.11, color),
    medium: color,
    dark: darken(0.1, color),
  }
}
