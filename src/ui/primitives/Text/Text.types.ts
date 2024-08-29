import type { VariantProps } from "class-variance-authority"
import type { PrimitiveProps } from "../primitives.types"
import { variants } from "./Text.variants"

export type TextVariantProps = VariantProps<typeof variants>

export type TextProps<T extends React.ElementType> = TextVariantProps &
  PrimitiveProps<T>
