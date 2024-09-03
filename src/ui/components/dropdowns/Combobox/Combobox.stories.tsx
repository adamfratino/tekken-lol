import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "./Combobox"
import { CHARACTERS } from "@/data/variables"

const meta = {
  title: "components/dropdowns/Combobox",
  component: Combobox,
  args: {
    items: CHARACTERS,
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
