import type { Meta, StoryObj } from "@storybook/react"
import { generateArgTypes, coreArgTypes } from "@/ui/lib/utils"
import { Text } from "./Text"
import { variants } from "./Text.variants"

const meta = {
  title: "primitives/Text",
  component: Text,
  argTypes: {
    ...generateArgTypes(variants, "Variants"),
    ...coreArgTypes(),
  },
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quaerat cupiditate. Assumenda.",
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <h1>testing asChild prop (element should be h1)</h1>,
  },
}

export const AsProp: Story = {
  args: {
    as: "h2",
    children: "testing as prop (element should be h2)",
  },
}

export const WithTailwind: Story = {
  args: {
    className: "text-red",
    children: "testing tailwind classNames (text should be red)",
  },
}
