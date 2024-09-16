import { cva } from "class-variance-authority"
import { getResponsiveClasses } from "@/ui/lib/utils"
import type { LayoutProps } from "../layout.types"
import { alignments, gaps, padding, shadows, widths } from "../layout.props"

const twVariants = {
  interactive: {
    true: "transform transition duration-50 hover:scale-[1.025] cursor-pointer active:scale-[1.005]",
  },
  disabled: {
    true: "cursor-not-allowed opacity-50 grayscale hover:scale-1",
  },
  bordered: {
    true: "border",
  },
}

export const variants = cva("rounded-md flex flex-col border overflow-hidden", {
  variants: twVariants,
  defaultVariants: {},
})

export const responsiveProps = (props: LayoutProps) => {
  const { align, gap, p, shadow, w } = props

  const alignClasses = align ? getResponsiveClasses(align, alignments) : []
  const gapClasses = gap ? getResponsiveClasses(gap, gaps) : []
  const paddingClasses = p ? getResponsiveClasses(p, padding) : []
  const shadowClasses = shadow ? getResponsiveClasses(shadow, shadows) : []
  const widthClasses = w ? getResponsiveClasses(w, widths) : []

  return [
    ...paddingClasses,
    ...gapClasses,
    ...shadowClasses,
    ...alignClasses,
    ...widthClasses,
  ]
}
