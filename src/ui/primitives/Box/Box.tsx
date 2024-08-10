import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef } from "react"
import { cn } from "@/ui/lib/utils"
import type { BoxProps } from "./Box.types"
import { variants } from "./Box.variants"

const boxVariants = cva("rounded-md p-2 inline-block", {
  variants,
  defaultVariants: {},
})

export type BoxVariantProps = VariantProps<typeof boxVariants>

export type BoxWithVariantProps<T extends React.ElementType> = BoxVariantProps &
  BoxProps<T>

export const Box = forwardRef(
  <T extends React.ElementType = "div">(
    {
      shadow,
      fullwidth,
      bordered,
      align,
      interactive,
      disabled,
      as,
      asChild,
      children,
      className,
      ...props
    }: BoxWithVariantProps<T>,
    ref: React.Ref<
      T extends React.ElementType
        ? React.ComponentPropsWithoutRef<T>["ref"]
        : never
    >
  ) => {
    const Component = asChild ? Slot : as ?? "div"

    return (
      <Component
        ref={ref}
        className={cn(
          boxVariants({
            shadow,
            fullwidth,
            bordered,
            align,
            interactive,
            disabled,
            className,
          })
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Box.displayName = "Box"
