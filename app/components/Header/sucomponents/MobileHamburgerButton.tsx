"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState } from "react"

import type { Characters } from "@/data/types"
import { useNavigationStore } from "@/stores"
import { Stack } from "@/ui/components"
import { Button } from "@/ui/primitives"

import { SidebarNavigation } from "app/components/Sidebar/components/SidebarNavigation"

import { horizontalModalVariants, navLinksVariants } from "./motion.variants"

type MobileHamburgerButtonProps = {
  character: Characters
}

export const MobileHamburgerButton = ({
  character,
}: MobileHamburgerButtonProps) => {
  // const { active, setActive } = useNavigationStore()
  const [active, setActive] = useState(false)

  return (
    <>
      <Button
        className="flex items-center rounded-md bg-yellow-medium px-4 py-2 shadow-md hover:bg-yellow-lighter md:hidden"
        onClick={() => setActive(true)}
      >
        <Menu size={16} color="black" />
      </Button>

      <AnimatePresence>
        {active && (
          <Stack
            asChild
            className="fixed inset-0 z-20 flex max-h-screen w-screen overflow-y-auto bg-background p-4 md:hidden"
          >
            <motion.div
              variants={horizontalModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Button
                onClick={() => setActive(false)}
                className="fixed right-2 top-2 z-30 self-end"
              >
                &times;
              </Button>
              <Stack asChild gap="md" className="pr-10 pt-10">
                <motion.div
                  className="bg-gray-900 relative w-full"
                  variants={navLinksVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <SidebarNavigation
                    character={character}
                    onClick={() => setActive(false)}
                  />
                </motion.div>
              </Stack>
            </motion.div>
          </Stack>
        )}
      </AnimatePresence>
    </>
  )
}
