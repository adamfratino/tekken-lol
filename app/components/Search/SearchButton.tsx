"use client"

import { Search as SearchIcon } from "lucide-react"
import { Group } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { cn } from "@/ui/lib/utils"

export const SearchButton = ({
  onClick,
  text,
  className,
}: {
  onClick?: () => void
  text: string
  className?: string
}) => (
  <Group
    asChild
    gap="sm"
    className={cn("w-full max-w-[640px] cursor-text", className)}
    align="start"
  >
    <Button variant="outline" onClick={onClick}>
      <SearchIcon size={18} />
      <p className={cn("hidden text-sm", "lg:block")}>{text}</p>
      <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  </Group>
)
