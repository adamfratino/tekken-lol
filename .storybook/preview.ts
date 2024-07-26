import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "@radix-ui/themes/styles.css"
import "@/ui/styles/globals.css"

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

  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
