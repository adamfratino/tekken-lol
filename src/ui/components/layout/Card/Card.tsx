import { cn } from "@/ui/lib/utils"
import { Box } from "@/ui/primitives"
import type { CardProps } from "./Card.types"
import { variants, responsiveProps } from "./Card.variants"

export const Card = <T extends React.ElementType = typeof Box>({
  className,
  gap,
  p,
  shadow,
  ...props
}: CardProps<T>) => {
  const responsiveClasses = responsiveProps({ gap, p, shadow })
  const classNames = cn(variants({ className }), ...responsiveClasses)

  return <Box className={classNames} {...props} />
}

Card.displayName = "Card"
