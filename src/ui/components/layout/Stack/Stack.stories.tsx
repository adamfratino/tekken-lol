import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "./Stack"

const meta = {
  title: "components/layout/Stack",
  component: Stack,
  args: {
    children: (
      <>
        <div className="bg-red-medium p-2">1</div>
        <div className="bg-red-dark p-2">2</div>
      </>
    ),
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
