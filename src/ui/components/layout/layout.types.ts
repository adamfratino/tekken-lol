import { alignments, gaps, padding, shadow, widths } from "./layout.props"

export type Align = keyof typeof alignments
export type Gap = keyof typeof gaps
export type Padding = keyof typeof padding
export type Shadow = keyof typeof shadow
export type Widths = keyof typeof widths

export type LayoutProps = {
  align?: Align
  gap?: Gap
  p?: Padding
  shadow?: Shadow
  w?: Widths
}
