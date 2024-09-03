"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Command } from "@/ui/components/dropdowns"
import type { Move } from "@/data/types"
import { CHARACTERS } from "@/data/variables"
import { SearchItemMove } from "./SearchItem"

type SearchProps = {
  moves?: Move[]
  active?: boolean
}

export const Search = ({ moves, active }: SearchProps) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    router.push(href)
    setOpen(false)
  }

  const groups = [
    {
      // heading: "Moves",
      items: moves
        ? moves.map((move) => ({
            label: <SearchItemMove move={move} />,
            value: `search_${move.command + move.moveNumber}`,
            onSelect: () => handleSelect(`#${move.command}`),
          }))
        : [],
    },
    {
      heading: "Characters",
      items: CHARACTERS.map((char) => ({
        label: char.label,
        value: `search_${char.value}`,
        onSelect: () => handleSelect(`/${char.value}`),
      })),
    },
  ]

  return (
    <Command
      open={open}
      onOpenChange={setOpen}
      placeholder="Type a command or search..."
      empty="No results found."
      groups={groups}
    />
  )
}
