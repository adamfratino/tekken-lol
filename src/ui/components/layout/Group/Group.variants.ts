import { cva } from "class-variance-authority"

const twVariants = {}

export const variants = cva("inline-flex", {
  variants: twVariants,
  defaultVariants: {},
})
