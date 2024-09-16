import { cva } from "class-variance-authority"
import { getResponsiveClasses } from "@/ui/lib/utils"
import type { LayoutProps } from "../layout.types"
import { alignments, directions, gaps, padding, widths } from "../layout.props"

const twVariants = {
  wrap: {
    true: "flex-wrap",
  },
}

export const variants = cva("inline-flex", {
  variants: twVariants,
  defaultVariants: {},
})

export const responsiveProps = (props: LayoutProps) => {
  const { align, gap, p, direction, w } = props

  const paddingClasses = p ? getResponsiveClasses(p, padding) : []
  const widthClasses = w ? getResponsiveClasses(w, widths) : []
  const gapClasses = gap ? getResponsiveClasses(gap, gaps) : []
  const alignClasses = align ? getResponsiveClasses(align, alignments) : []
  const directionClasses = direction
    ? getResponsiveClasses(direction, directions)
    : []

  return [
    ...paddingClasses,
    ...gapClasses,
    ...alignClasses,
    ...directionClasses,
    ...widthClasses,
  ]
}
