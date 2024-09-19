"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Command } from "@/ui/components/dropdowns"
import type { Characters, Move } from "@/data/types"
import { SearchItemMove } from "./SearchItem"
import { useSearchStore } from "@/stores"

type MovesSearchProps = {
  moves?: Move[]
  character?: Characters
  subpath?: string // New optional prop
}

export const MovesSearch = ({
  moves,
  character,
  subpath,
}: MovesSearchProps) => {
  const { active: activeSearch, setActive: setActiveSearch } = useSearchStore()
  const router = useRouter()
  const pathname = usePathname()
  const pathnameArray = pathname.split("/").filter((c) => c)

  // Function to ensure subpath starts with a single '/'
  const formatSubpath = (path: string) => {
    if (!path.startsWith("/")) {
      return `/${path}`
    }
    return path
  }

  const handleOpenChange = (isOpen: boolean) => {
    setActiveSearch(isOpen ? "desktop" : undefined)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setActiveSearch("desktop")
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setActiveSearch])

  const handleSelect = (href: string) => {
    router.push(href)
    setActiveSearch(undefined)
  }

  const items = moves
    ? moves.map((move, i) => {
        const movePath = subpath
          ? `${formatSubpath(subpath)}#${move.command}`
          : `#${move.command}`

        return {
          label: <SearchItemMove move={move} />,
          value: `search_${move.command + move.moveNumber}`,
          onSelect: () => handleSelect(movePath),
          key: move.command + i + move.moveNumber,
        }
      })
    : []

  return (
    <Command
      open={activeSearch === "desktop"}
      onOpenChange={handleOpenChange}
      placeholder="Search for a move by command, property..."
      empty="No results found."
      items={items}
    />
  )
}
