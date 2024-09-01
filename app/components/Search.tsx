"use client"

import { Search as SearchIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Group } from "@/ui/components"
import { Button } from "@/ui/primitives"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/ui/primitives/command"
import { CHARACTERS } from "@/data/variables"

/** @todo create store for moves */
export const SearchButton = ({
  moves,
  text,
}: {
  moves?: any[]
  text: string
}) => {
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
    <>
      <Group asChild gap="sm">
        <Button onClick={() => setOpen(true)}>
          <SearchIcon size={18} />
          <p className="text-xs font-semibold">{text}</p>
          <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </Group>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {moves && (
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
                    {move.command.replaceAll(",", ", ")} /{" "}
                    {move.hitLevel.replaceAll(",", ", ")}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

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
    </>
  )
}
