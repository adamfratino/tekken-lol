import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { styles } from "./Text.styles"
import * as variants from "./Text.variants"

type BaseProps = React.PropsWithChildren<{
  className?: string
}>

type AsChildProps = BaseProps & {
  asChild: true
  as?: never
}

type AsElementProps<T extends React.ElementType> = BaseProps & {
  asChild?: false
  as?: T
}

export type TextProps<T extends React.ElementType> = VariantProps<
  typeof textVariants
> &
  (AsChildProps | AsElementProps<T>)

const textVariants = cva(styles, {
  variants,
  defaultVariants: {
    variant: "default",
  },
})

const Text = <T extends React.ElementType = "span">({
  as,
  asChild,
  variant,
  children,
  className,
  ...props
}: TextProps<T>) => {
  const Component = asChild ? Slot : as ?? "span"

  return (
    <Component className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  )
}

export default Text
