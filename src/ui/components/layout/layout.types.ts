import { gaps, padding } from "./layout.props"

export type Gap = keyof typeof gaps
export type Padding = keyof typeof padding

export type LayoutProps = {
  gap?: Gap
  p?: Padding
}
