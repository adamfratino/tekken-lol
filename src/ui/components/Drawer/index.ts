import { Drawer as DrawerPrimitive } from "vaul"
import { DrawerOverlay, DrawerContent } from "./components"

const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close

import DrawerComponent from "./Drawer"

export const Drawer = Object.assign(DrawerComponent, {
  Portal: DrawerPortal,
  Overlay: DrawerOverlay,
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  Content: DrawerContent,
})
