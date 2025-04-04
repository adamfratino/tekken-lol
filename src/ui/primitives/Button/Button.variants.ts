const twVariants = {
  variant: {
    default: ["bg-primary", "text-primary-foreground", "hover:bg-[#000]/75"],
    destructive: [
      "bg-destructive",
      "text-destructive-foreground",
      "hover:bg-destructive/90",
    ],
    outline: [
      "border",
      "border-foreground",
      "bg-background",
      "hover:bg-accent",
    ],
    secondary: [
      "bg-secondary",
      "transition-all",
      "text-secondary-foreground",
      "hover:bg-gray-lightest/25",
    ],
    ghost: ["hover:bg-accent", "hover:text-accent-foreground"],
    link: ["text-primary", "underline-offset-4", "hover:underline"],
  },
  size: {
    default: ["h-10", "px-4", "py-2"],
    sm: ["h-9", "rounded-md", "px-3"],
    lg: ["h-11", "rounded-md", "px-8"],
    icon: ["h-10", "w-10"],
  },
} as const

export const variant = twVariants.variant
export const size = twVariants.size
