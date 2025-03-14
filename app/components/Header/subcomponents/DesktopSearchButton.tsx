"use client"

import { Search } from "lucide-react"

import { useSearchStore } from "@/stores"
import { Group, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

export const DesktopSearchButton = () => {
  const setActiveSearch = useSearchStore((s) => s.setActive)

  return (
    <Group asChild gap="sm" p="md" className="max-md:hidden">
      <Button
        className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md hover:bg-yellow-lighter md:min-w-[360px] md:max-w-full"
        onClick={() => setActiveSearch("desktop")}
      >
        <Search size={16} color="black" />
        <Title
          as="h4"
          size="sm"
          weight="medium"
          className="hidden font-semibold text-foreground md:inline"
        >
          Search for a move
        </Title>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 md:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </Group>
  )
}
