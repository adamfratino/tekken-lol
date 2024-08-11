import type { Meta, StoryObj } from "@storybook/react"
import { generateArgTypes } from "@/ui/lib/utils"
import { gaps, padding } from "../layout.props"
import { Group } from "./Group"
import { variants } from "./Group.variants"

const meta = {
  title: "components/Group",
  component: Group,
  args: {
    children: (
      <>
        <div className="bg-red-medium p-2">1</div>
        <div className="bg-red-dark p-2">2</div>
      </>
    ),
  },
  argTypes: {
    ...generateArgTypes(variants, "Variants"),
    ...generateArgTypes(
      [
        { obj: gaps, name: "gap" },
        { obj: padding, name: "p" },
      ],
      "Props"
    ),
  },
} satisfies Meta<typeof Group>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gap: "md",
    p: "md",
    className: "bg-blue-medium",
  },
}
