import type { Meta, StoryObj } from "@storybook/react"
import { Property } from "./Property"
import { twVariants } from "./Property.variants"
import { generateArgTypes } from "@/ui/lib/utils"

const meta = {
  title: "components/typography/Property",
  component: Property,
  args: {
    children: "1, 2, 3, 4",
  },
  argTypes: generateArgTypes(twVariants, "Variants"),
} satisfies Meta<typeof Property>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
