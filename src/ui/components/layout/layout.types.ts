import { alignments, gaps, padding, widths } from "./layout.props"

export type Align = keyof typeof alignments
export type Gap = keyof typeof gaps
export type Padding = keyof typeof padding
export type Widths = keyof typeof widths

export type LayoutProps = {
  align?: Align
  gap?: Gap
  p?: Padding
  w?: Widths
}
