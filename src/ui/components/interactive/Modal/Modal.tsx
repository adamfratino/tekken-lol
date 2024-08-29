import type { PropsWithChildren } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/primitives/Dialog/Dialog"

export type ModalProps = PropsWithChildren<{
  trigger: React.ReactNode
  title?: string
  description?: string
}>

export const Modal = ({
  trigger,
  title,
  description,
  children,
}: ModalProps) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="h-[90dvh] w-[90dvw]">
      <DialogHeader className="mb-4 min-h-5">
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
)
