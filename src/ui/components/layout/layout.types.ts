import { gaps } from "./layout.props"

export type Gap = keyof typeof gaps

export type LayoutProps = {
  gap?: Gap
}
