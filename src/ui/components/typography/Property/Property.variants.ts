import { cva } from "class-variance-authority"
import { shades, sizes, weights } from "../typography.props"

export const twVariants = {
  variant: {
    title: "font-semibold text-sm",
    primary: "font-bold text-xl md:text-2xl lg:text-[48px] lg:leading-none",
    secondary: "font-bold text-lg mg:text-xl lg:text-2xl",
    tertiary: "font-bold text-base md:text-lg",
    label: "text-xs",
  },
  shade: shades,
  size: sizes,
  weight: weights,
}

export const variants = cva("", {
  variants: twVariants,
  defaultVariants: {},
})
