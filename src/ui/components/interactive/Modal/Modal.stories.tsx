import type { Meta, StoryObj } from "@storybook/react"
import { Modal } from "./Modal"
import { Button } from "@/ui/primitives"

const meta = {
  title: "components/interactive/Modal",
  args: {
    trigger: <Button>open modal</Button>,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis dignissimos rerum eligendi obcaecati.",
    size: "small",
  },
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
