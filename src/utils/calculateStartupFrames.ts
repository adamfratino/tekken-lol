import type { Move } from "@/data/types"

// Helper function to calculate concatenated startup frames with spaces and without "i" or leading commas
export function calculateStartupFrames(command: string, moves: Move[]): string {
  const commandParts = command.split(",")
  const startupFrames: string[] = []

  commandParts.forEach((part, index) => {
    const currentCommand = commandParts.slice(0, index + 1).join(",")
    const move = moves.find((m) => m.command === currentCommand)

    if (move?.startup) {
      // Remove "i", leading commas, and trim the result
      const cleanedStartup = move.startup
        .replace(/i/g, "")
        .replace(/^,/, "")
        .trim()
      if (cleanedStartup) {
        startupFrames.push(cleanedStartup)
      }
    }
  })

  // Join all startup frames with a comma and space, e.g., "10, 15, 20~21"
  return startupFrames.join(", ")
}
