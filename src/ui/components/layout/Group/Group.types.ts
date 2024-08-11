import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { LayoutProps } from "../layout.types"
import { variants } from "./Group.variants"

export type GroupVariantProps = VariantProps<typeof variants>
export type GroupLayoutProps = Pick<LayoutProps, "gap" | "p">

export type GroupProps<T extends React.ElementType> = BoxProps<T> &
  GroupVariantProps &
  GroupLayoutProps
