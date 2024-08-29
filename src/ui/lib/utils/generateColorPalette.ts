import { darken, lighten, shade, tint } from "polished"
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
    lightest: tint(0.5, color),
    lighter: tint(0.35, color),
    light: tint(0.2, color),
    medium: color,
    dark: shade(0.2, color),
    darker: shade(0.35, color),
    darkest: shade(0.5, color),
  }
}
