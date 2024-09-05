import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { LayoutProps } from "../layout.types"
import { variants } from "./Flex.variants"

export type FlexVariantProps = VariantProps<typeof variants>
export type FlexLayoutProps = Pick<
  LayoutProps,
  "gap" | "p" | "align" | "direction"
>

export type FlexProps<T extends React.ElementType> = BoxProps<T> &
  FlexVariantProps &
  FlexLayoutProps
