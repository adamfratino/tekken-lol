import { cva } from "class-variance-authority"

const twVariants = {}

export const variants = cva("rounded-md inline-flex border overflow-hidden", {
  variants: twVariants,
  defaultVariants: {},
})
