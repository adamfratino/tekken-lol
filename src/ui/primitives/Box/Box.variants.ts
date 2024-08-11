import { cva } from "class-variance-authority"

const twVariants = {
  shadow: {
    true: "shadow-lg",
  },
  fullwidth: {
    true: "w-full",
  },
  bordered: {
    true: "border",
  },
  interactive: {
    true: "transform transition duration-50 hover:scale-[1.025] cursor-pointer",
  },
  disabled: {
    true: "cursor-not-allowed pointer-events-none opacity-75 grayscale",
  },
}

export const variants = cva(
  {},
  {
    variants: twVariants,
    defaultVariants: {},
  }
)
