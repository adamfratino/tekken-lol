import { cn } from "@/ui/lib/utils"

import { Box } from "@/ui/primitives"
import { gaps, padding } from "../layout.props"

import type { GroupProps } from "./Group.types"
import { variants } from "./Group.variants"

export const Group = <T extends React.ElementType = typeof Box>({
  className,
  gap = "none",
  p = "none",
  ...props
}: GroupProps<T>) => {
  const classNames = cn(variants({ className }), gaps[gap], padding[p])

  return <Box className={classNames} {...props} />
}

Group.displayName = "Group"
