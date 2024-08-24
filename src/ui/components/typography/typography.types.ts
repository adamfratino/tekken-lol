import { shades, weights, sizes } from "./typography.props"

export type Shade = keyof typeof shades
export type Weight = keyof typeof weights
export type Size = keyof typeof sizes

export type TypographyProps = {
  shade?: Shade
  weight?: Weight
  size?: Size
}
