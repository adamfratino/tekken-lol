import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import { gaps, padding, shadow } from "../layout.props"
import type { CardProps } from "./Card.types"
import { variants } from "./Card.variants"

export const Card = <T extends React.ElementType = typeof Box>({
  className,
  gap,
  interactive,
  p,
  shadow: shadowProp = "md",
  ...props
}: CardProps<T>) => {
  const classNames = cn(
    variants({ interactive, className }),
    gap && gaps[gap],
    p && padding[p],
    shadowProp && shadow[shadowProp]
  )

  return <Box className={classNames} {...props} />
}

Card.displayName = "Group"
