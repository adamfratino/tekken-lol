import { cva } from "class-variance-authority"
import { getResponsiveClasses } from "@/ui/lib/utils"
import type { LayoutProps } from "../layout.types"
import { alignments, gaps, padding, widths } from "../layout.props"

const twVariants = {}

export const variants = cva("inline-flex flex-col", {
  variants: twVariants,
  defaultVariants: {},
})

export const responsiveProps = (props: LayoutProps) => {
  const { align, gap, p, w } = props

  const paddingClasses = p ? getResponsiveClasses(p, padding) : []
  const widthClasses = w ? getResponsiveClasses(w, widths) : []
  const gapClasses = gap ? getResponsiveClasses(gap, gaps) : []
  const alignClasses = align ? getResponsiveClasses(align, alignments) : []

  return [...paddingClasses, ...gapClasses, ...alignClasses, ...widthClasses]
}
