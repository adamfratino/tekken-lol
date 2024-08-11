import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { cn } from "@/ui/lib/utils"
import type { BoxProps } from "./Box.types"
import { variants } from "./Box.variants"

export const Box = forwardRef(
  <T extends React.ElementType = "div">(
    {
      bordered,
      disabled,
      fullwidth,
      interactive,
      inverted,
      shadow,
      className,
      as,
      asChild,
      children,
      ...props
    }: BoxProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const Component = asChild ? Slot : as ?? "div"

    return (
      <Component
        ref={ref}
        className={cn(
          variants({
            bordered,
            disabled,
            fullwidth,
            interactive,
            inverted,
            shadow,
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
