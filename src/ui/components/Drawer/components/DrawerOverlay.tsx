import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/ui/lib/utils"

export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("bg-black/80 fixed inset-0 z-50", className)}
    {...props}
  />
))

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
