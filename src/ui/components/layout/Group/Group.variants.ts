import { cva } from "class-variance-authority"
import { getResponsiveClasses } from "@/ui/lib/utils"
import type { LayoutProps } from "../layout.types"
import { alignments, gaps, padding } from "../layout.props"

const twVariants = {
  w: {
    full: "flex w-full",
  },
  wrap: {
    true: "flex-wrap",
  },
}

export const variants = cva("inline-flex", {
  variants: twVariants,
  defaultVariants: {},
})

export const responsiveProps = (props: LayoutProps) => {
  const { align, gap, p } = props

  const paddingClasses = p ? getResponsiveClasses(p, padding) : []
  const gapClasses = gap ? getResponsiveClasses(gap, gaps) : []
  const alignClasses = align ? getResponsiveClasses(align, alignments) : []

  return [...paddingClasses, ...gapClasses, ...alignClasses]
}
