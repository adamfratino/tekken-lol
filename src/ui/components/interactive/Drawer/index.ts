import { Drawer as DrawerPrimitive } from "vaul"
import { DrawerContent } from "./components"
import DrawerComponent from "./Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerClose = DrawerPrimitive.Close

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  Content: DrawerContent,
})
