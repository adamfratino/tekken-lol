import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { cn } from "@/ui/lib/utils"
import type { BoxProps } from "./Box.types"
import { variants } from "./Box.variants"

export const Box = forwardRef(
  <T extends React.ElementType = "div">(
    { className, as, asChild, children, ...props }: BoxProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const Component = asChild ? Slot : as ?? "div"
    const classNames = cn(variants({ className }))

    return (
      <Component ref={ref} className={classNames} {...props}>
        {children}
      </Component>
    )
  }
)

Box.displayName = "Box"
