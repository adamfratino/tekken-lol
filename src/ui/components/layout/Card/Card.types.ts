import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { LayoutProps } from "../layout.types"
import { variants } from "./Card.variants"

export type CardVariantProps = VariantProps<typeof variants>
export type CardLayoutProps = Pick<LayoutProps, "gap" | "p" | "shadow">

export type CardProps<T extends React.ElementType> = BoxProps<T> &
  CardVariantProps &
  CardLayoutProps
