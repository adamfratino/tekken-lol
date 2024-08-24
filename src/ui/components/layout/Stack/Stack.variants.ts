import { cva } from "class-variance-authority"
import { alignments, gaps, padding, widths } from "../layout.props"

const twVariants = {
  align: alignments,
  gap: gaps,
  p: padding,
  w: widths,
}

export const variants = cva("inline-flex flex-col", {
  variants: twVariants,
  defaultVariants: {},
})
