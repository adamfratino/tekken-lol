import { cva } from "class-variance-authority"

const twVariants = {
  italic: {
    true: "italic",
  },
}

export const variants = cva("font-sans font-normal", {
  variants: twVariants,
  defaultVariants: {},
})
