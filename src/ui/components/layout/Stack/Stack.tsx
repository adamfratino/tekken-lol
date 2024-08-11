import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import { alignments, gaps, padding } from "../layout.props"
import type { StackProps } from "./Stack.types"
import { variants } from "./Stack.variants"

export const Stack = <T extends React.ElementType = typeof Box>({
  className,
  align,
  gap,
  p,
  ...props
}: StackProps<T>) => {
  const classNames = cn(
    variants({ className }),
    align && alignments[align],
    gap && gaps[gap],
    p && padding[p]
  )

  return <Box className={classNames} {...props} />
}

Stack.displayName = "Stack"
