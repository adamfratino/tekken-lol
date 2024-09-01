import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/primitives"
import { cn } from "@/ui/lib/utils"
import type { ModalProps } from "./Modal.types"
import { variants } from "./Modal.variants"

export const Modal = ({
  size,
  trigger,
  title,
  description,
  children,
}: ModalProps) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className={cn("h-[90dvh] w-[90dvw]", variants({ size }))}>
      <DialogHeader className="mb-4 min-h-5">
        <DialogTitle className="mb-2">{title}</DialogTitle>
        {description && (
          <DialogDescription className="max-w-[460px]">
            {description}
          </DialogDescription>
        )}
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
)
