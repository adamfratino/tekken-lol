import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { StackProps } from "./Stack.types"
import { variants, responsiveProps } from "./Stack.variants"

export const Stack = <T extends React.ElementType = typeof Box>({
  className,
  align,
  gap,
  p,
  w,
  ...props
}: StackProps<T>) => {
  const responsiveClasses = responsiveProps({ align, gap, p, w })
  const classNames = cn(variants({ className }), ...responsiveClasses)

  return <Box className={classNames} {...props} />
}

Stack.displayName = "Stack"
