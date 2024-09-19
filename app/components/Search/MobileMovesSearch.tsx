"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

import { Move } from "@/data/types"
import { useSearchStore } from "@/stores"
import { Stack, Card, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

import {
  navLinksVariants,
  verticalModalVariants,
} from "../Header/subcomponents/motion.variants"
import { SearchItemMove } from "./SearchItem"

type MobileMovesSearchProps = {
  moves: Move[]
}

export const MobileMovesSearch = ({ moves }: MobileMovesSearchProps) => {
  const { active, setActive } = useSearchStore()

  return (
    active === "mobile" && (
      <AnimatePresence>
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
              onClick={() => setActive(undefined)}
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
                  <Card
                    key={`${move.command}_MobileSearchButton_${i}`}
                    asChild
                    p="sm"
                  >
                    <Link
                      href={`#${encodeURIComponent(move.command)}`}
                      onClick={() => setActive(undefined)}
                      className="w-full"
                    >
                      <SearchItemMove move={move} />
                    </Link>
                  </Card>
                ))}
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </AnimatePresence>
    )
  )
}
