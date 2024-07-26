import type { Theme } from "./types"

export const variables: Theme = {
  colors: {
    border: "var(--colors-border)",
    input: "var(--colors-input)",
    ring: "var(--colors-ring)",
    background: "var(--colors-background)",
    foreground: "var(--colors-foreground)",
    primary: {
      DEFAULT: "var(--colors-primary)",
      foreground: "var(--colors-primary-foreground)",
    },
    secondary: {
      DEFAULT: "var(--colors-secondary)",
      foreground: "var(--colors-secondary-foreground)",
    },
    destructive: {
      DEFAULT: "var(--colors-destructive)",
      foreground: "var(--colors-destructive-foreground)",
    },
    muted: {
      DEFAULT: "var(--colors-muted)",
      foreground: "var(--colors-muted-foreground)",
    },
    accent: {
      DEFAULT: "var(--colors-accent)",
      foreground: "var(--colors-accent-foreground)",
    },
    popover: {
      DEFAULT: "var(--colors-popover)",
      foreground: "var(--colors-popover-foreground)",
    },
    card: {
      DEFAULT: "var(--colors-card)",
      foreground: "var(--colors-card-foreground)",
    },
  },
}
