import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef } from "react"

import { cn } from "@/ui/lib/utils"
import { Box, type BoxProps } from "@/ui/primitives"

import type { GroupProps } from "./Group.types"
import { variants } from "./Group.variants"

const groupVariants = cva("inline-flex p-0", {
  variants,
  defaultVariants: {},
})

export type GroupVariantProps = VariantProps<typeof groupVariants>

export type GroupWithVariantProps<T extends React.ElementType> =
  GroupVariantProps & BoxProps<T> & GroupProps

export const Group = forwardRef(
  <T extends React.ElementType = typeof Box>(
    {
      as,
      asChild,
      children,
      className,
      gap,
      ...props
    }: GroupWithVariantProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const Component = asChild ? Slot : as ?? Box

    return (
      <Component
        ref={ref}
        className={cn(groupVariants({ className }), {
          "gap-1": gap === 1,
          "gap-2": gap === 2,
          "gap-3": gap === 3,
          "gap-4": gap === 4,
          "gap-5": gap === 5,
          "gap-6": gap === 6,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Box.displayName = "Box"
