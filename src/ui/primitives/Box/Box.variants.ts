import { cva } from "class-variance-authority"

const twVariants = {
  fullwidth: {
    true: "w-full",
  },
  bordered: {
    true: "border",
  },
  disabled: {
    true: "cursor-not-allowed pointer-events-none opacity-60 grayscale",
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
