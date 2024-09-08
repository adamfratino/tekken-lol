"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Command } from "@/ui/components/dropdowns"
import type { Move } from "@/data/types"
import { SearchItemMove } from "./SearchItem"
import { useSearchStore } from "@/stores"

type SearchProps = {
  moves?: Move[]
}

export const MovesSearch = ({ moves }: SearchProps) => {
  const { active: activeSearch, setActive: setActiveSearch } = useSearchStore()
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setActiveSearch(true)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    router.push(href)
    setActiveSearch(false)
  }

  const items = moves
    ? moves.map((move, i) => ({
        label: <SearchItemMove move={move} />,
        value: `search_${move.command + move.moveNumber}`,
        onSelect: () => handleSelect(`#${move.command}`),
        key: move.command + i + move.moveNumber,
      }))
    : []

  return (
    <Command
      open={activeSearch}
      onOpenChange={setActiveSearch}
      placeholder="Search for a move by command, property..."
      empty="No results found."
      items={items}
    />
  )
}
