import { UserIcon } from "lucide-react"
import type { PropsWithChildren } from "react"
import Link from "next/link"
import { cn } from "@/ui/lib/utils"
import { Group, Stack, Title } from "@/ui/components"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "@/ui/primitives"
import { CHARACTERS, TAGS } from "@/data/variables"
import { Characters } from "@/data/types"

const itemVariants = cva(
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-yellow-lighter hover:text-primary",
  {
    variants: {
      variant: {
        neutral: "hover:bg-foreground hover:text-background",
        yellow: "hover:bg-yellow-light",
      },
    },
  }
)

type ItemProps = VariantProps<typeof itemVariants> &
  PropsWithChildren<{
    active?: boolean
  }>

const Item = ({ children, active, variant = "yellow" }: ItemProps) => (
  <Link
    href="#"
    className={cn(itemVariants({ variant }), {
      "bg-yellow-light text-primary hover:bg-yellow-light":
        active && variant === "yellow",
    })}
  >
    {children}
  </Link>
)

type SidebarProps = {
  character: Characters
}

export const Sidebar = ({ character }: SidebarProps) => {
  const characterName = CHARACTERS.filter((char) => char.value === character)[0]

  return (
    <div className="bg-muted/40 sticky hidden border-r md:block">
      <Stack gap="sm" p="sm" w="full" className="h-full max-h-screen">
        <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
          <Group gap="sm" className="items-center">
            <UserIcon size={18} />
            <Title as="h2">{characterName?.label}</Title>
          </Group>
        </div>

        <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
          <Item active>All moves</Item>
          <Item>Stances</Item>
          <Item>Heat moves</Item>
          <Item>Punishers</Item>
          <Item>Launchers</Item>
          <Item>At the wall</Item>
        </Stack>

        <div className="mt-auto px-2 font-medium">
          <p className="text-xs">tekken.lol &mdash; v0.0.1</p>
        </div>
      </Stack>
    </div>
  )
}
