import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "./Box"

const meta = {
  title: "primitives/Box",
  component: Box,
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const AsChild: Story = {
  args: {
    children: (
      <section>testing asChild prop (element should be section)</section>
    ),
  },
}

export const AsProp: Story = {
  args: {
    as: "main",
    children: "testing as prop (element should be main)",
  },
}

export const WithTailwind: Story = {
  args: {
    className: "h-[200px] w-[200px] bg-red-medium p-2 rounded-md",
    children: "testing tailwind classNames (Box should be red, 200x200)",
  },
}
