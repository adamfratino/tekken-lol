import { cva } from "class-variance-authority"

const twStyles =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

const twVariants = {
  variant: {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
    block: "rounded-md shadow-lg",
  },
  size: {
    large: "px-6 py-2 text-base",
  },
  shade: {
    high: "bg-forest-light",
    mid: "bg-yellow-light",
    low: "bg-red-light",
    "Balcony Break": "bg-green-medium",
    "Floor Break": "bg-lime-dark",
    "Heat Burst": "bg-orange-light",
    "Heat Smash": "bg-orange-medium",
    "Heat Engager": "bg-orange-light",
    "Homing Move": "bg-pink-medium",
    "Power Crush": "bg-teal-medium",
    "Tornado Move": "bg-blue-light",
    "Low Crush": "bg-purple-light",
    "High Crush": "bg-purple-lighter",
    "Wall Crush": "bg-aqua-medium",
    Punisher: "bg-lime-light",
  },
}

export const variants = cva(twStyles, {
  variants: twVariants,
  defaultVariants: {
    variant: "default",
  },
})
