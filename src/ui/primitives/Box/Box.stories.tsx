import type { Meta, StoryObj } from "@storybook/react"
import { generateArgTypes } from "@/ui/lib/utils"
import { Box } from "./Box"
import { variants } from "./Box.variants"

const meta = {
  title: "primitives/Box",
  component: Box,
  argTypes: generateArgTypes(variants, "Variants"),
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const AsChild: Story = {
  args: {
    asChild: false,
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
