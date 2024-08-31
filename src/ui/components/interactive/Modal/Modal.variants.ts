import { cva } from "class-variance-authority"

const twVariants = {
  size: {
    full: "h-[90dvh] w-[90dvw]",
    small: "max-w-[640px] h-auto",
  },
}

export const variants = cva("", {
  variants: twVariants,
  defaultVariants: {
    size: "full",
  },
})
