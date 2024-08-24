import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { GroupProps } from "./Group.types"
import { variants } from "./Group.variants"

export const Group = <T extends React.ElementType = typeof Box>({
  className,
  align,
  gap,
  p,
  w,
  ...props
}: GroupProps<T>) => {
  const classNames = cn(variants({ className, align, gap, p, w }))

  return <Box className={classNames} {...props} />
}

Group.displayName = "Group"
