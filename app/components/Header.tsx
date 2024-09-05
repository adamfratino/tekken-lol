import { Search } from "lucide-react"
import { Group, Title } from "@/ui/components"

export const Header = () => (
  <header className="flex h-14 w-full items-center gap-4 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
    <Group asChild gap="sm" p="md" className="ml-auto">
      <Title
        as="h2"
        size="sm"
        weight="medium"
        className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md md:w-full md:max-w-[440px]"
      >
        <Search size={16} />
        <span className="hidden md:inline">
          Search for move commands, stances, frames, etc.
        </span>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 md:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Title>
    </Group>
  </header>
)
