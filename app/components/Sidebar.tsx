import type { PropsWithChildren } from "react"
import Link from "next/link"
import { cn } from "@/ui/lib/utils"
import { Card, Group, Stack, Title } from "@/ui/components"
import { User } from "lucide-react"

type ItemProps = PropsWithChildren<{
  active?: boolean
}>

const Item = ({ children, active }: ItemProps) => (
  <Link
    href="#"
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-yellow-lighter hover:text-primary",
      {
        "bg-yellow-light text-primary hover:bg-yellow-light": active,
      }
    )}
  >
    {children}
  </Link>
)

export const Sidebar = () => (
  <div className="bg-muted/40 hidden border-r md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Group gap="md">
          <User className="h-6 w-6" />
          <Title>Alisa Bosconovitch</Title>
        </Group>
      </div>

      <div className="flex-1">
        <Stack gap="sm" className="px-2 text-sm font-medium lg:px-4">
          <Item active>All moves</Item>
          <Item>Stances</Item>
          <Item>Punishers</Item>
          <Item>Heat moves</Item>
          <Item>Launchers</Item>
          <Item>At the wall</Item>
        </Stack>
      </div>

      <Card className="m-4 mt-auto p-4" inverted>
        sidebar footer
      </Card>
    </div>
  </div>
)
