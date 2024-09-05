import { cva } from "class-variance-authority"
import { shades, sizes, weights } from "../typography.props"

export const twVariants = {
  shade: shades,
  size: sizes,
  weight: weights,
}

export const variants = cva("text-sm sm:text-md", {
  variants: twVariants,
  defaultVariants: {},
})
