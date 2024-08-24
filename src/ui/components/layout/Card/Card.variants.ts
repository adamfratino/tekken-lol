import { cva } from "class-variance-authority"
import { getResponsiveClasses } from "@/ui/lib/utils"
import type { LayoutProps } from "../layout.types"
import { alignments, gaps, padding, shadows, widths } from "../layout.props"

const twVariants = {
  interactive: {
    true: "transform transition duration-50 hover:scale-[1.025] cursor-pointer active:scale-[1.005]",
  },
}

export const variants = cva("rounded-md flex border overflow-hidden", {
  variants: twVariants,
  defaultVariants: {},
})

export const responsiveProps = (props: LayoutProps) => {
  const { align, gap, p, shadow } = props

  const paddingClasses = p ? getResponsiveClasses(p, padding) : []
  const gapClasses = gap ? getResponsiveClasses(gap, gaps) : []
  const shadowClasses = shadow ? getResponsiveClasses(shadow, shadows) : []
  const alignClasses = align ? getResponsiveClasses(align, alignments) : []

  return [...paddingClasses, ...gapClasses, ...shadowClasses, ...alignClasses]
}
