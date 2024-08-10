"use client"

import * as React from "react"
import { Button } from "@/ui/primitives"
import { Drawer } from "@/ui/components"
import { PunishersAccordion } from "./PunishersAccordion"

export const Sidebar = () => (
  <Drawer direction="right">
    <Drawer.Trigger asChild>
      <Button>Open Drawer</Button>
    </Drawer.Trigger>
    <Drawer.Content className="ml-auto h-screen w-[400px]">
      <div className="h-full">
        <PunishersAccordion />
        <Drawer.Close asChild>
          <Button>Cancel</Button>
        </Drawer.Close>
      </div>
    </Drawer.Content>
  </Drawer>
)
