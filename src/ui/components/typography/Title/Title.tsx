import { cn } from "@/ui/lib/utils"
import { Text } from "@/ui/primitives"
import type { TitleProps } from "./Title.types"
import { variants } from "./Title.variants"

export const Title = <T extends React.ElementType = typeof Text>({
  className,
  ...props
}: TitleProps<T>) => {
  const classNames = cn(variants({ className }))

  return <Text className={classNames} {...props} />
}

Title.displayName = "Title"
