"use client"

import { Search as SearchIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Group } from "@/ui/components"
import { Button } from "@/ui/primitives"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/ui/components"
import { CHARACTERS } from "@/data/variables"
import { cn } from "@/ui/lib/utils"

/** @todo create store for moves */
export const SearchButton = ({
  moves,
  text,
  className,
}: {
  moves?: any[]
  text: string
  className?: string
}) => {
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

  return (
    <>
      <Group
        asChild
        gap="sm"
        className={cn("w-full max-w-[640px] cursor-text", className)}
        align="start"
      >
        <Button variant="outline" onClick={() => setOpen(true)}>
          <SearchIcon size={18} />
          <p className={cn("hidden text-sm", "lg:block")}>{text}</p>
          <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
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
                  onSelect={() => handleSelect(`#${move.command}`)}
                  className="cursor-pointer"
                >
                  {move.command.replaceAll(",", ", ")} /{" "}
                  {move.hitLevel.replaceAll(",", ", ")}
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          <CommandGroup heading="Characters">
            {CHARACTERS.map((char) => (
              <CommandItem
                key={`search_${char.value}`}
                onSelect={() => handleSelect(`/${char.value}`)}
                className="cursor-pointer"
              >
                {char.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
