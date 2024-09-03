"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Command } from "@/ui/components/dropdowns"
import type { Move } from "@/data/types"
import { CHARACTERS } from "@/data/variables"
import { SearchItemCharacter, SearchItemMove } from "./SearchItem"

type SearchProps = {
  moves?: Move[]
}

export const Search = ({ moves }: SearchProps) => {
  const [open, setOpen] = useState(false)
  const [activeSearchGroup, setActiveSearchGroup] = useState<
    "Moves" | "Characters" | undefined
  >(undefined)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setActiveSearchGroup("Moves")
        setOpen(true)
      }
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        setActiveSearchGroup("Characters")
        setOpen(true)
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
      heading: "Moves",
      items: moves
        ? moves.map((move, i) => ({
            label: <SearchItemMove move={move} />,
            value: `search_${move.command + move.moveNumber}`,
            onSelect: () => handleSelect(`#${move.command}`),
            key: move.command + i + move.moveNumber,
          }))
        : [],
    },
    {
      heading: "Characters",
      items: CHARACTERS.map((char, i) => ({
        label: (
          <SearchItemCharacter character={char.label} count={moves!.length} />
        ),
        value: `search_${char.value}`,
        onSelect: () => handleSelect(`/${char.value}`),
        key: `${char}search${i}`,
      })),
    },
  ]

  return (
    <Command
      defaultValue={activeSearchGroup}
      open={open}
      onOpenChange={setOpen}
      placeholder="Search for a move by command, property..."
      empty="No results found."
      groups={groups}
    />
  )
}
