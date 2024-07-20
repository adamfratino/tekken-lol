import type { Preview } from "@storybook/react"

import "../styles/tailwind.css"

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
