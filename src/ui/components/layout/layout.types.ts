import {
  alignments,
  directions,
  gaps,
  padding,
  shadows,
  widths,
} from "./layout.props"

export type Align = keyof typeof alignments.base
export type Direction = keyof typeof directions.base
export type Gap = keyof typeof gaps.base
export type Padding = keyof typeof padding.base
export type Shadow = keyof typeof shadows.base
export type Width = keyof typeof widths.base

export type ResponsiveProp<T extends string> =
  | T
  | { base?: T; sm?: T; md?: T; lg?: T; xl?: T }

export type LayoutProps = {
  align?: ResponsiveProp<Align>
  direction?: ResponsiveProp<Direction>
  gap?: ResponsiveProp<Gap>
  p?: ResponsiveProp<Padding>
  shadow?: ResponsiveProp<Shadow>
  w?: ResponsiveProp<Width>
}
