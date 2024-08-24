import type { Meta, StoryObj } from "@storybook/react"
import { Title } from "./Title"
import { generateArgTypes, coreArgTypes } from "@/ui/lib/utils"
import { twVariants } from "./Title.variants"

const meta = {
  title: "components/typography/Title",
  component: Title,
  argTypes: {
    ...generateArgTypes(twVariants),
    ...coreArgTypes(),
  },
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, laudantium! Debitis nulla delectus quae explicabo illo eos expedita at quibusdam.",
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
