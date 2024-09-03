import { Search } from "lucide-react"
import { Group, Title } from "@/ui/components"

export const Header = () => (
  <header className="flex h-14 w-full items-center gap-4 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
    <div className="fixed left-[50%] translate-x-[-50%]">
      <Group asChild gap="sm">
        <Title
          as="h2"
          size="sm"
          weight="medium"
          className="ml-auto flex min-w-[540px] items-center rounded-full bg-yellow-medium py-2 pl-4 pr-6 text-sm shadow-md"
        >
          <Search size={16} />
          Search for move commands, stances, frames, etc.
          <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Title>
      </Group>
    </div>
  </header>
)
