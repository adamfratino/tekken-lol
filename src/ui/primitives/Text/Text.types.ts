import type { VariantProps } from "class-variance-authority"
import type { PrimitiveProps } from "../primitives.types"
import { variants } from "./Text.variants"

export type BoxVariantProps = VariantProps<typeof variants>

export type TextProps<T extends React.ElementType> = BoxVariantProps &
  PrimitiveProps<T>
