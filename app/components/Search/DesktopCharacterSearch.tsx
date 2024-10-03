"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { CHARACTERS } from "@/data/variables"
import { useNavigationStore } from "@/stores"
import { Command } from "@/ui/components"

import { SearchItemCharacter } from "./SearchItem"

export const DesktopCharacterSearch = () => {
  const router = useRouter()
  const { active, setActive } = useNavigationStore()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setActive(true)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    router.push(href)
    setActive(false)
  }

  const items = CHARACTERS.filter((char) => !char.disabled).map((char, i) => ({
    label: (
      <SearchItemCharacter character={char.label} featured={char.featured} />
    ),
    value: `search_${char.value}`,
    onSelect: () => handleSelect(`/${char.value}`),
    key: `${char}search${i}`,
  }))

  return (
    <Command
      open={active}
      onOpenChange={setActive}
      placeholder="Search for a move by command, property..."
      empty="No results found."
      items={items}
    />
  )
}
