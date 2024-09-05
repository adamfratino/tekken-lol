import { cn } from "@/ui/lib/utils"
import { Text } from "@/ui/primitives"
import type { BodyProps } from "./Body.types"
import { variants } from "./Body.variants"

export const Body = <T extends React.ElementType = typeof Text>({
  className,
  shade,
  size,
  weight,
  ...props
}: BodyProps<T>) => {
  const classNames = cn(variants({ className, shade, size, weight }))

  return <Text className={classNames} {...props} />
}

Body.displayName = "Body"
