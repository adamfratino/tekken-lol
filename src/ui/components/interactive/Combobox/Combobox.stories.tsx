import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "./Combobox"

const MOCK_DATA = [
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

const meta = {
  title: "components/interactive/Combobox",
  component: Combobox,
  args: {
    items: MOCK_DATA,
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
