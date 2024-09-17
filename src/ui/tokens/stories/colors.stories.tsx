import type { Meta, StoryObj } from "@storybook/react"
import { ColorGrid } from "./components/ColorGrid"

const meta: Meta<typeof ColorGrid> = {
  component: ColorGrid,
  title: "tokens/colors",
  tags: ["!autodocs"],
}

export default meta
type Story = StoryObj<typeof ColorGrid>

export const Palettes: Story = { name: "palettes" }
