import { cva } from "class-variance-authority"

const twVariants = {}

export const variants = cva("flex flex-col", {
  variants: twVariants,
  defaultVariants: {},
})
