import { alignments, gaps, padding } from "./layout.props"

export type Align = keyof typeof alignments
export type Gap = keyof typeof gaps
export type Padding = keyof typeof padding

export type LayoutProps = {
  align?: Align
  gap?: Gap
  p?: Padding
}
