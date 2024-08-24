import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "../../../primitives"
// import type { LayoutProps } from "../../layout/layout.types"
import { variants } from "./Badge.variants"

export type BadgeVariantProps = VariantProps<typeof variants>
// export type BadgeLayoutProps = Pick<LayoutProps, "gap" | "p" | "align" | "w">

export type BadgeProps<T extends React.ElementType> = BoxProps<T> &
  BadgeVariantProps
// & BadgeLayoutProps
