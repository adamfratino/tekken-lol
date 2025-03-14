import type { Theme } from "./types"

export const dark: Theme = {
  colors: {
    background: "hsl(222.2, 84%, 4.9%)",
    foreground: "hsl(210, 40%, 98%)",
    border: "hsl(217.2, 32.6%, 17.5%)",
    input: "hsl(217.2, 32.6%, 17.5%)",
    ring: "hsl(212.7, 26.8%, 83.9%)",
    primary: {
      DEFAULT: "hsl(210, 40%, 98%)",
      foreground: "hsl(222.2, 47.4%, 11.2%)",
    },
    secondary: {
      DEFAULT: "hsl(217.2, 32.6%, 17.5%)",
      foreground: "hsl(210, 40%, 98%)",
    },
    muted: {
      DEFAULT: "hsl(217.2, 32.6%, 17.5%)",
      foreground: "hsl(215, 20.2%, 65.1%)",
    },
    accent: {
      DEFAULT: "hsl(217.2, 32.6%, 17.5%)",
      foreground: "hsl(210, 40%, 98%)",
    },
    destructive: {
      DEFAULT: "hsl(0, 62.8%, 30.6%)",
      foreground: "hsl(210, 40%, 98%)",
    },
    card: {
      DEFAULT: "hsl(222.2, 84%, 4.9%)",
      foreground: "hsl(210, 40%, 98%)",
    },
    popover: {
      DEFAULT: "hsl(222.2, 84%, 4.9%)",
      foreground: "hsl(210, 40%, 98%)",
    },
  },
}
