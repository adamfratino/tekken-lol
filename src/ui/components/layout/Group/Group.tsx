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
  ...props
}: GroupProps<T>) => {
  const responsiveClasses = responsiveProps({ align, gap, p })
  const classNames = cn(variants({ className, w }), ...responsiveClasses)

  return <Box className={classNames} {...props} />
}

Group.displayName = "Group"
