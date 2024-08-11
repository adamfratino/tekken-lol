import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { cn } from "@/ui/lib/utils"
import type { TextProps } from "./Text.types"
import { variants } from "./Text.variants"

export const Text = forwardRef(
  <T extends React.ElementType = "span">(
    { as, asChild, className, shade, weight, ...props }: TextProps<T>,
    ref: React.Ref<HTMLSpanElement>
  ) => {
    const Component = asChild ? Slot : as ?? "span"
    const classNames = cn(variants({ shade, weight, className }))

    return <Component ref={ref} className={classNames} {...props} />
  }
)

Text.displayName = "Text"
