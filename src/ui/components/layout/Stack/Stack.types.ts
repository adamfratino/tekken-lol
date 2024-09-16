import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { LayoutProps } from "../layout.types"
import { variants } from "./Stack.variants"

export type StackVariantProps = VariantProps<typeof variants>
export type StackLayoutProps = Pick<LayoutProps, "p" | "gap" | "align" | "w">

export type StackProps<T extends React.ElementType> = BoxProps<T> &
  StackVariantProps &
  StackLayoutProps & {
    wrap?: true
  }
