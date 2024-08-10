import { cva } from "class-variance-authority"

const twVariants = {}

export const variants = cva("inline-flex p-0", {
  variants: twVariants,
  defaultVariants: {},
})
