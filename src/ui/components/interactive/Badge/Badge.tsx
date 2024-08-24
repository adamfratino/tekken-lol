import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { BadgeProps } from "./Badge.types"
import { variants } from "./Badge.variants"

export const Badge = <T extends React.ElementType = typeof Box>({
  className,
  ...props
}: BadgeProps<T>) => {
  const classNames = cn(variants({ className }))

  return <Box className={classNames} {...props} />
}
