import { Badge, Group, Title } from "@/ui/components"

export const Header = () => (
  <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-2 lg:h-[60px] lg:px-4">
    <Group
      gap="xl"
      className="items-center rounded-md border border-foreground bg-yellow-medium pr-6"
    >
      <Badge
        variant="block"
        className="bg-foreground px-4 py-2 text-background"
      >
        PROTIP:
      </Badge>
      <Title size="xs" weight="semibold">
        press{" "}
        <kbd className="pointer-events-none mx-1 hidden h-5 select-none items-center gap-1 rounded bg-foreground px-1.5 font-mono text-[10px] font-medium text-background opacity-100 lg:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the search menu
      </Title>
    </Group>
  </header>
)
