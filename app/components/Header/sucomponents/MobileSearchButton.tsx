"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Search, X } from "lucide-react"

import type { Move } from "@/data/types"
import { Card, Stack, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

import { SearchItemMove } from "app/components/Search/SearchItem"

import {
  verticalModalVariants,
  navLinksVariants,
  linkItemVariants,
} from "./motion.variants"

type MobileSearchButtonProps = {
  moves: Move[]
}

export const MobileSearchButton = ({ moves }: MobileSearchButtonProps) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Button
        className="flex items-center rounded-md bg-yellow-medium px-4 py-2 shadow-md hover:bg-yellow-lighter md:hidden"
        onClick={() => setActive(true)}
      >
        <Search size={16} color="black" />
      </Button>

      <AnimatePresence>
        {active && (
          <Stack
            asChild
            className="fixed inset-0 z-20 flex max-h-screen w-screen overflow-y-auto bg-background p-4"
          >
            <motion.div
              variants={verticalModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Title className="mt-2">Find a move</Title>
              <Button
                onClick={() => setActive(false)}
                className="fixed right-2 top-2 z-30 self-end"
              >
                <X size={16} />
              </Button>
              <Stack asChild gap="md" className="pt-4">
                <motion.div
                  className="bg-gray-900 relative w-full"
                  variants={navLinksVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {moves.map((move, i) => (
                    <motion.span
                      key={`${move.command}_MobileSearchButton_${i}`}
                      variants={linkItemVariants}
                    >
                      <Card key={`${move.command}_move_${i}`} p="sm">
                        <SearchItemMove move={move} />
                      </Card>
                    </motion.span>
                  ))}
                </motion.div>
              </Stack>
            </motion.div>
          </Stack>
        )}
      </AnimatePresence>
    </>
  )
}
