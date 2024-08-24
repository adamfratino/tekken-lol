import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { TypographyProps } from "../typography.types"
import { variants } from "./Title.variants"

export type TitleVariantProps = VariantProps<typeof variants>
export type TitleTypographyProps = Pick<
  TypographyProps,
  "shade" | "size" | "weight"
>

export type TitleProps<T extends React.ElementType> = BoxProps<T> &
  TitleVariantProps &
  TitleTypographyProps
