import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/ui/lib/utils"
import { variants } from "./Text.variants"
import type { TextProps } from "./Text.types"

const textVariants = cva("font-sans font-normal", {
  variants,
  defaultVariants: {},
})

export type TextVariantProps = VariantProps<typeof textVariants>

export type TextWithVariantProps<T extends React.ElementType> =
  TextVariantProps & TextProps<T>

export const Text = forwardRef(
  <T extends React.ElementType = "span">(
    {
      as,
      asChild,
      children,
      className,
      shade,
      weight,
      ...props
    }: TextWithVariantProps<T>,
    ref: React.Ref<
      T extends React.ElementType
        ? React.ComponentPropsWithoutRef<T>["ref"]
        : never
    >
  ) => {
    const Component = asChild ? Slot : as ?? "span"

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ shade, weight, className }))}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = "Text"
