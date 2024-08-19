import { cva } from "class-variance-authority"

const twVariants = {}

export const variants = cva("font-semibold", {
  variants: twVariants,
  defaultVariants: {},
})
