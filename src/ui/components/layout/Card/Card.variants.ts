import { cva } from "class-variance-authority"

const twVariants = {
  interactive: {
    true: "transform transition duration-50 hover:scale-[1.025] cursor-pointer active:scale-[1.005]",
  },
}

export const variants = cva("rounded-md flex border overflow-hidden", {
  variants: twVariants,
  defaultVariants: {},
})
