import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta = {
  title: "components/layout/Card",
  component: Card,
  args: {
    className: "size-24 bg-foreground",
    children: <div className="size-8 bg-orange-medium" />,
    p: { base: "none", sm: "lg" },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
