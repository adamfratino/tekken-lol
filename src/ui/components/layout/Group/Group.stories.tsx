import type { Meta, StoryObj } from "@storybook/react"
import { generateArgTypes } from "@/ui/lib/utils"
import { Group } from "./Group"
import { variants } from "./Group.variants"

const meta = {
  title: "primitives/Group",
  component: Group,
  args: {
    children: (
      <>
        <div className="bg-red-medium p-2">1</div>
        <div className="bg-red-dark p-2">2</div>
      </>
    ),
  },
  argTypes: generateArgTypes(variants, "Variants"),
} satisfies Meta<typeof Group>

export default meta
type Story = StoryObj<typeof meta>

export const WithGap: Story = {
  args: {
    gap: 6,
    className: "bg-blue-medium",
  },
}
