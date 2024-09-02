import type { VariantProps } from "class-variance-authority"
import type { PropsWithChildren } from "react"
import { variants } from "./Modal.variants"

export type ModalVariantProps = VariantProps<typeof variants>

export type ModalProps = PropsWithChildren<{
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger: React.ReactNode
  title?: string
  description?: string | React.ReactNode
}> &
  ModalVariantProps
