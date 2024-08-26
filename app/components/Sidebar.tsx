import type { PropsWithChildren } from "react"
import Link from "next/link"
import { cn } from "@/ui/lib/utils"
import { Combobox, Stack } from "@/ui/components"

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

type ItemProps = PropsWithChildren<{
  active?: boolean
}>

const Item = ({ children, active }: ItemProps) => (
  <Link
    href="#"
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-yellow-lighter hover:text-primary",
      {
        "bg-yellow-light text-primary hover:bg-yellow-light": active,
      }
    )}
  >
    {children}
  </Link>
)

export const Sidebar = () => (
  <div className="bg-muted/40 sticky hidden border-r md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
        <Combobox items={CHARACTERS} buttonClassName="w-full" />
      </div>

      <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
        <Item active>All moves</Item>
        <Item>Stances</Item>
        <Item>Punishers</Item>
        <Item>Heat moves</Item>
        <Item>Launchers</Item>
        <Item>At the wall</Item>
      </Stack>

      {/* <Button className="m-4 mt-auto p-4">Select a character</Button> */}
    </div>
  </div>
)
