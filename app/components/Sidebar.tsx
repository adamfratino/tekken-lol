"use client"

import * as React from "react"
import { Button } from "@/ui/primitives"
import { Drawer } from "@/ui/components"

export const Sidebar = () => (
  <Drawer direction="left">
    <Drawer.Trigger asChild>
      <Button variant="outline">Open Drawer.</Button>
    </Drawer.Trigger>
    <Drawer.Content className="w-[400px]">
      <div className="mx-auto h-screen">
        <Drawer.Close asChild>
          <Button variant="outline">Cancel</Button>
        </Drawer.Close>
      </div>
    </Drawer.Content>
  </Drawer>
)
