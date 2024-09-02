import type { Meta, StoryObj } from "@storybook/react"
import { CHARACTERS } from "@/data/variables"
import { Select } from "./Select"

const meta = {
  title: "components/dropdowns/Select",
  component: Select,
  args: {
    placeholder: "Placeholder...",
    items: CHARACTERS,
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
