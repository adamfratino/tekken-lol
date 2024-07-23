export const hexToHsl = (hex: string) => {
  if (hex === "#fff" || hex === "#ffffff") {
    return "hsl(0, 0%, 100%)"
  }
  if (hex === "#000" || hex === "#000000") {
    return "hsl(0, 0%, 0%)"
  }
  const r = parseInt(hex.substring(1, 3), 16) / 255
  const g = parseInt(hex.substring(3, 5), 16) / 255
  const b = parseInt(hex.substring(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = (max + min) / 2
  let s = (max + min) / 2
  let l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  h = Math.round(360 * h)

  return `hsl(${h}, ${s}%, ${l}%)`
}
