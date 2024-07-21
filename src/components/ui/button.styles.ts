const layout = ["inline-flex", "items-center", "justify-center", "whitespace-nowrap", "rounded-md"] as const
const typography = ["text-sm", "font-medium"] as const
const transition = ["transition-colors"] as const
const focus = [
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
] as const
const disabled = ["disabled:pointer-events-none", "disabled:opacity-50"] as const
const accessibility = ["ring-offset-background"] as const

export const styles = [...layout, ...typography, ...transition, ...focus, ...disabled, ...accessibility] as const
