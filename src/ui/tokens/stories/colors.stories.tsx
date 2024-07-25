import type { Meta, StoryObj } from "@storybook/react"
import { ColorGrid } from "./components/ColorGrid"

const meta: Meta<typeof ColorGrid> = {
  component: ColorGrid,
  title: "tokens",
  tags: ["!autodocs"],
}

export default meta
type Story = StoryObj<typeof ColorGrid>

export const Colors: Story = { name: "colors" }
