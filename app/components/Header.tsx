import { Badge, Group, Title } from "@/ui/components"

export const Header = () => (
  <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-2 lg:h-[60px] lg:px-4">
    <Group gap="xl">
      {/* <Badge
        variant="block"
        className="bg-foreground px-4 py-2 text-background"
      >
        PROTIP:
      </Badge> */}
      <Title
        as="h2"
        size="sm"
        weight="semibold"
        className="flex items-center rounded-md bg-yellow-medium px-4 py-2"
      >
        Search moves with{" "}
        <kbd className="pointer-events-none ml-2 hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Title>

      <Title
        as="h2"
        size="sm"
        weight="semibold"
        className="flex items-center rounded-md bg-yellow-medium px-4 py-2"
      >
        Search characters with{" "}
        <kbd className="pointer-events-none ml-2 hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Title>
    </Group>
  </header>
)
