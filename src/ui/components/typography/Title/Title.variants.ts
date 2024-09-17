import { cva } from "class-variance-authority"
import { shades, sizes, weights } from "../typography.props"

export const twVariants = {
  variant: {
    headline: "text-4xl md:text-5xl",
    subheadline: "text-lg sm:text-xl md:text-2xl",
    eyebrow: "text-md",
  },
  shade: shades,
  size: sizes,
  weight: weights,
}

export const variants = cva("font-semibold", {
  variants: twVariants,
  defaultVariants: {},
})
