"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/ui/primitives/command"
import { CHARACTERS } from "@/data/variables"

export function Search({ moves }: { moves: any[] }) {
  const [open, setOpen] = useState(false)

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

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Moves">
          {moves.map((move) => (
            <CommandItem
              key={`search_${move.command + move.moveNumber}`}
              asChild
            >
              <Link
                href={`#${move.command}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                {move.command}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Characters">
          {CHARACTERS.map((char) => (
            <CommandItem key={`search_${char.value}`} asChild>
              <Link href={`/${char.value}`} className="cursor-pointer">
                {char.label}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
