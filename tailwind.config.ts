import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
const variablesApi = require("@mertasan/tailwindcss-variables/api")
import { colors } from "./src/ui/tokens"
import { light, dark, variables } from "./src/ui/themes"

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: variables,
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addComponents, config }) => {
      addComponents(variablesApi.variables({ DEFAULT: light }, {}))
      addComponents(
        variablesApi.darkVariables({ DEFAULT: dark }, {}, config("darkMode"))
      )
    }),
  ],
} satisfies Config
