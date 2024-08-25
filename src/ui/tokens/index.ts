import * as colorTokens from "./colors"

type ColorKeys = keyof typeof colorTokens

export const colors = Object.keys(colorTokens).reduce(
  (acc, key) => {
    const typedKey = key as ColorKeys // Assert that the key is a valid ColorKeys type
    acc[typedKey] = colorTokens[typedKey]
    return acc
  },
  {} as Record<ColorKeys, (typeof colorTokens)[ColorKeys]>
)
