import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { GroupProps } from "./Group.types"
import { variants, responsiveProps } from "./Group.variants"

export const Group = <T extends React.ElementType = typeof Box>({
  className,
  align,
  gap,
  p,
  w,
  wrap,
  ...props
}: GroupProps<T>) => {
  const responsiveClasses = responsiveProps({ align, gap, p, w })
  const classNames = cn(variants({ className, wrap }), ...responsiveClasses)

  return <Box className={classNames} {...props} />
}

Group.displayName = "Group"
