import { cva } from "class-variance-authority"

const twVariants = {
  bordered: {
    true: "border",
  },
  inverted: {
    true: "bg-foreground text-background",
  },
}

export const variants = cva(
  {},
  {
    variants: twVariants,
    defaultVariants: {},
  }
)
