import { cn } from "@/ui/lib/utils"

import { Box } from "@/ui/primitives"
import { alignments, gaps, padding } from "../layout.props"

import type { GroupProps } from "./Group.types"
import { variants } from "./Group.variants"

export const Group = <T extends React.ElementType = typeof Box>({
  className,
  gap,
  p,
  align,
  ...props
}: GroupProps<T>) => {
  const classNames = cn(
    variants({ className }),
    align ? alignments[align] : undefined,
    gap ? gaps[gap] : undefined,
    p ? padding[p] : undefined
  )

  return (
    <Box className={classNames} {...props}>
      {props.children}
    </Box>
  )
}

Group.displayName = "Group"
