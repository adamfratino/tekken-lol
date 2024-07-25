import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/ui/lib/utils"
import { styles } from "./button.styles"
import * as variants from "./button.variants"

type CustomProps = {
  asChild?: boolean
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  CustomProps

const buttonVariants = cva(styles, {
  variants,
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = ({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
