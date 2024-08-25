import { cn } from "@/ui/lib/utils"
import { Text } from "@/ui/primitives"
import type { PropertyProps } from "./Property.types"
import { variants } from "./Property.variants"

export const Property = <T extends React.ElementType = typeof Text>({
  className,
  shade,
  size,
  weight,
  variant,
  ...props
}: PropertyProps<T>) => {
  const classNames = cn(variants({ className, shade, size, weight, variant }))

  return <Text className={classNames} {...props} />
}

Property.displayName = "Property"
