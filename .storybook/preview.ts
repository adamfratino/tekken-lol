import type { Preview } from "@storybook/react"
import { withThemeByDataAttribute } from "@storybook/addon-themes"
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
    withThemeByDataAttribute({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
}

export default preview
