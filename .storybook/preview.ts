import type { Preview } from "@storybook/react"
import "@radix-ui/themes/styles.css"
import "../styles/globals.css"

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
