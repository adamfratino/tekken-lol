import { Search, Menu } from "lucide-react"
import { Group, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

export const Header = () => (
  <header className="flex h-14 w-full items-center gap-4 border-b bg-muted px-2 lg:h-[60px] lg:px-4">
    <Group asChild gap="sm" p="md">
      <Button className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md hover:bg-yellow-lighter md:w-full md:max-w-[440px]">
        <Menu size={16} color="black" />
        <Title as="h4" size="sm" weight="medium" className="hidden md:inline">
          Search for move commands, stances, frames, etc.
        </Title>
      </Button>
    </Group>
    <Group asChild gap="sm" p="md" className="ml-auto">
      <Button className="flex items-center overflow-y-auto rounded-md bg-yellow-medium px-4 py-2 text-sm shadow-md hover:bg-yellow-lighter md:w-full md:max-w-[440px]">
        <Search size={16} color="black" />
        <Title as="h4" size="sm" weight="medium" className="hidden md:inline">
          Search for move commands, stances, frames, etc.
        </Title>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 md:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </Group>
  </header>
)
