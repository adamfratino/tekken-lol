"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { UserIcon, X } from "lucide-react"

import { CHARACTERS, PATHS } from "@/data/variables"
import { Stack, Card, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

import {
  verticalModalVariants,
  navLinksVariants,
  linkItemVariants,
} from "./motion.variants"

export const MobileCharacterSelectButton = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Button
        className="flex items-center rounded-md bg-yellow-medium px-4 py-2 shadow-md hover:bg-yellow-lighter md:hidden"
        onClick={() => setActive(true)}
      >
        <UserIcon size={16} color="black" />
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
              <Button
                onClick={() => setActive(false)}
                className="fixed right-2 top-2 z-30 self-end"
              >
                <X size={16} />
              </Button>
              <Stack asChild gap="md" className="pt-2">
                <motion.div
                  className="bg-gray-900 relative w-full"
                  variants={navLinksVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Title className="mb-2">Choose your fighter</Title>
                  {CHARACTERS.map(
                    ({ label, value, disabled }) =>
                      !disabled && (
                        // <motion.span
                        //   key={`${label}_MobileCharacterSelect`}
                        //   variants={linkItemVariants}
                        // >
                        <Card
                          key={`${label}_MobileCharacterSelect`}
                          asChild
                          bordered
                          p="md"
                          className="active:bg-yellow-medium"
                        >
                          <Link href={`/${value}/${PATHS.ALL}`}>
                            <Title size="md">{label}</Title>
                          </Link>
                        </Card>
                        // </motion.span>
                      )
                  )}
                </motion.div>
              </Stack>
            </motion.div>
          </Stack>
        )}
      </AnimatePresence>
    </>
  )
}
