import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { FlexProps } from "./Flex.types"
import { variants, responsiveProps } from "./Flex.variants"

export const Flex = <T extends React.ElementType = typeof Box>({
  className,
  align,
  gap,
  p,
  w,
  direction,
  wrap,
  ...props
}: FlexProps<T>) => {
  const responsiveClasses = responsiveProps({ align, gap, p, direction })
  const classNames = cn(variants({ className, w, wrap }), ...responsiveClasses)

  return <Box className={classNames} {...props} />
}

Flex.displayName = "Flex"
