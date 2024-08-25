import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { TypographyProps } from "../typography.types"
import { variants } from "./Property.variants"

export type PropertyVariantProps = VariantProps<typeof variants>
export type PropertyTypographyProps = Pick<
  TypographyProps,
  "shade" | "size" | "weight"
>

export type PropertyProps<T extends React.ElementType> = BoxProps<T> &
  PropertyVariantProps &
  PropertyTypographyProps
