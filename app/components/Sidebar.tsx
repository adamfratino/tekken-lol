import { UserIcon } from "lucide-react"
import type { PropsWithChildren } from "react"
import Link from "next/link"
import { cn } from "@/ui/lib/utils"
import { Group, Stack, Title } from "@/ui/components"
import { cva, type VariantProps } from "class-variance-authority"

const CHARACTERS = [
  { label: "Kazuya Mishima", value: "kazuya" },
  { label: "Jin Kazama", value: "jin" },
  { label: "King", value: "king" },
  { label: "Jun Kazama", value: "jun" },
  { label: "Paul Phoenix", value: "paul" },
  { label: "Marshall Law", value: "law" },
  { label: "Jack-8", value: "jack8" },
  { label: "Lars Alexandersson", value: "lars" },
  { label: "Ling Xiayou", value: "xiayou" },
  { label: "Nina Williams", value: "nina" },
  { label: "Leroy Smith", value: "leroy" },
  { label: "Asuka Kazama", value: "asuka" },
  { label: "Lili Rochefort", value: "lili" },
  { label: "Bryan Fury", value: "bryan" },
  { label: "Hwoarang", value: "hwoarang" },
  { label: "Claudio Serafino", value: "claudio" },
  { label: "Azucena Milagros Ortiz Castillo", value: "azucena" },
  { label: "Raven", value: "raven" },
  { label: "Leo Kliesen", value: "leo" },
  { label: "Steve Fox", value: "steve" },
  { label: "Kuma", value: "kuma" },
  { label: "Yoshimitsu", value: "yoshimitsu" },
  { label: "Shaheen", value: "shaheen" },
  { label: "Sergei Dragunov", value: "dragunov" },
  { label: "Feng Wei", value: "feng" },
  { label: "Panda", value: "panda" },
  { label: "Lee Chaolan", value: "lee" },
  { label: "Alisa Bosconovitch", value: "alisa" },
  { label: "Zafina", value: "zafina" },
  { label: "Devil Jin", value: "devilJin" },
  { label: "Victor Chevalier", value: "victor" },
  { label: "Reina", value: "reina" },
  { label: "Eddy Gordo", value: "eddy" },
  { label: "Lidia Sobieska", value: "lidia" },
  { label: "Heihachi Mishima", value: "heihachi" },
]

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

export const Sidebar = () => (
  <div className="bg-muted/40 sticky hidden border-r md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
        <Group gap="sm" className="items-center">
          <UserIcon size={18} />
          <Title as="h2">Feng Wei</Title>
        </Group>
      </div>

      <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
        <Item variant="neutral">Select a character</Item>
        <Item variant="neutral">Select a filter</Item>
      </Stack>

      <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
        <Item active>All moves</Item>
        <Item>Stances</Item>
        <Item>Punishers</Item>
        <Item>Heat moves</Item>
        <Item>Launchers</Item>
        <Item>At the wall</Item>
      </Stack>

      <div className="m-4 mt-auto rounded-md bg-foreground p-4 text-xs text-background">
        Select a character
      </div>
    </div>
  </div>
)
