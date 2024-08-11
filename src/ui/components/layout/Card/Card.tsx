import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import { gaps, padding } from "../layout.props"
import type { CardProps } from "./Card.types"
import { variants } from "./Card.variants"

export const Card = <T extends React.ElementType = typeof Box>({
  className,
  shadow = true,
  gap,
  p,
  ...props
}: CardProps<T>) => {
  const classNames = cn(
    variants({ className }),
    gap && gaps[gap],
    p && padding[p]
  )

  return <Box className={classNames} shadow={shadow} {...props} />
}

Card.displayName = "Group"
