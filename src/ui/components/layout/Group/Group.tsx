import { type VariantProps } from "class-variance-authority"
import { cn } from "@/ui/lib/utils"
import { Box, type BoxProps } from "@/ui/primitives"
import { gaps } from "../layout.props"
import type { LayoutProps } from "../layout.types"
import { variants } from "./Group.variants"

export type GroupVariantProps = VariantProps<typeof variants>
export type GroupLayoutProps = Pick<LayoutProps, "gap">

export type GroupProps<T extends React.ElementType> = BoxProps<T> &
  GroupVariantProps &
  GroupLayoutProps

export const Group = <T extends React.ElementType = typeof Box>({
  children,
  className,
  gap = "none",
  ...props
}: GroupProps<T>) => {
  const classNames = cn(variants({ className }), gaps[gap])

  return (
    <Box className={classNames} {...props}>
      {children}
    </Box>
  )
}

Group.displayName = "Group"
