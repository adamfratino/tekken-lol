import type { VariantProps } from "class-variance-authority"
import type { TextProps } from "@/ui/primitives"
import type { TypographyProps } from "../typography.types"
import { variants } from "./Body.variants"

export type BodyVariantProps = VariantProps<typeof variants>
export type BodyTypographyProps = Pick<
  TypographyProps,
  "shade" | "size" | "weight"
>

export type BodyProps<T extends React.ElementType> = TextProps<T> &
  BodyVariantProps &
  BodyTypographyProps
