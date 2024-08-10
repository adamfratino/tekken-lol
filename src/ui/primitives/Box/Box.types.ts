import type { VariantProps } from "class-variance-authority"
import type { PrimitiveProps } from "../primitives.types"
import { variants } from "./Box.variants"

export type BoxVariantProps = VariantProps<typeof variants>

export type BoxProps<T extends React.ElementType> = BoxVariantProps &
  PrimitiveProps<T>
