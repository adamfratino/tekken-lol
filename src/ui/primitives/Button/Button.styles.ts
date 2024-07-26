const twStyles = {
  layout: [
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-md",
  ],
  typography: ["text-sm", "font-medium"],
  transition: "transition-colors",
  focus: [
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
  ],
} as const

export const styles = Object.values(twStyles).flat()
