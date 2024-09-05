"use client"

import { X } from "lucide-react"
import type { PropsWithChildren } from "react"
import { useNavigationStore } from "@/stores"
import { Button } from "@/ui/primitives"
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
} from "@/ui/components/interactive/Drawer/Drawer"
import {
  DialogClose,
  DialogOverlay,
  DialogDescription,
  DialogTitle,
} from "@/ui/primitives"
import { SidebarFooter } from "./SidebarFooter"
import { getCharacterLabel } from "@/utils"

export const MobileDrawer = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  const characterName = getCharacterLabel(title)
  const { active: activeNav, setActive: setActiveNav } = useNavigationStore()

  return (
    <div className="md:hidden">
      <Drawer
        direction="left"
        open={activeNav}
        onClose={() => setActiveNav(false)}
      >
        <DrawerContent className="h-full w-[90%]">
          <DrawerHeader>
            <DialogTitle className="space-between flex items-center capitalize">
              {characterName}
              <Button asChild>
                <DialogClose
                  onClick={() => setActiveNav(false)}
                  className="ml-auto p-1"
                >
                  <X size={14} />
                </DialogClose>
              </Button>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DrawerHeader>

          {children}

          <DrawerFooter>{/* <SidebarFooter /> */}</DrawerFooter>
        </DrawerContent>
        <DialogOverlay />
      </Drawer>
    </div>
  )
}
