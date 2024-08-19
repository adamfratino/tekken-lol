import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
// import type { Typography } from "../typography.types"
import { variants } from "./Title.variants"

export type TitleVariantProps = VariantProps<typeof variants>
// export type TitleTypography = Pick<Typography, "">

export type TitleProps<T extends React.ElementType> = BoxProps<T> &
  TitleVariantProps
// & TitleTypography
