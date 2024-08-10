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
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
  interactive: {
    true: "transform transition duration-50 hover:scale-[1.025] cursor-pointer",
  },
  disabled: {
    true: "cursor-not-allowed pointer-events-none opacity-50",
  },
}

export const variants = cva("rounded-md p-2 inline-block", {
  variants: twVariants,
  defaultVariants: {},
})
