"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import Fuse from "fuse.js"

import { Move } from "@/data/types"
import { useSearchStore } from "@/stores"
import { Stack, Card, Group } from "@/ui/components"
import { Button, Input } from "@/ui/primitives"

import {
  navLinksVariants,
  verticalModalVariants,
} from "../Header/subcomponents/motion.variants"
import { SearchItemMove } from "./SearchItem"

type MobileMovesSearchProps = {
  moves: Move[]
  subpath?: string
}

export const MobileMovesSearch = ({
  moves,
  subpath,
}: MobileMovesSearchProps) => {
  const { active, setActive } = useSearchStore()
  const [query, setQuery] = useState("")

  const formatSubpath = (path: string) => {
    if (!path.startsWith("/")) {
      return `/${path}`
    }
    return path
  }

  const fuse = useMemo(() => {
    return new Fuse(moves, {
      keys: ["command", "description"],
      includeScore: true,
    })
  }, [moves])

  const results = useMemo(() => {
    if (query.trim() === "") {
      return moves
    }
    return fuse.search(query).map((result) => result.item)
  }, [fuse, query, moves])

  return (
    active === "mobile" && (
      <AnimatePresence>
        <Stack
          asChild
          className="fixed inset-0 z-20 flex max-h-screen w-screen overflow-y-auto bg-background"
        >
          <motion.div
            variants={verticalModalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* <Title className="mt-2">Find a move</Title> */}
            <Group
              w="full"
              className="sticky top-0 z-30 border-b border-b-gray-lightest bg-background p-4"
            >
              {/* Search Input Field */}
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query state
                placeholder="Search moves"
                className="border-gray-300 rounded-l-md rounded-r-none border p-2"
              />
              <Button
                onClick={() => setActive(undefined)}
                className="rounded-l-none"
              >
                <X size={16} />
              </Button>
            </Group>
            <Stack asChild gap="md" className="p-4">
              <motion.div
                className="bg-gray-900 relative w-full"
                variants={navLinksVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {results.map((move, i) => {
                  const movePath = subpath
                    ? `${formatSubpath(subpath)}#${move.command}`
                    : `#${move.command}`

                  return (
                    <Card
                      key={`${move.command}_MobileMovesSearch_${i}`}
                      asChild
                      p="sm"
                    >
                      <Link
                        href={movePath}
                        onClick={() => setActive(undefined)}
                        className="w-full"
                      >
                        <SearchItemMove move={move} />
                      </Link>
                    </Card>
                  )
                })}
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </AnimatePresence>
    )
  )
}
