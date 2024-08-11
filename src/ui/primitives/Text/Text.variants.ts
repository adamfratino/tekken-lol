import { cva } from "class-variance-authority"

const twVariants = {
  shade: {
    alert: "text-red-medium",
    success: "text-green-dark",
  },
  weight: {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
  },
}

export const variants = cva("font-sans font-normal", {
  variants: twVariants,
  defaultVariants: {},
})
