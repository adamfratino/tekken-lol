import type { Move } from "@/data/types"

// Helper function to calculate concatenated startup frames with spaces and without "i"
export function calculateStartupFrames(command: string, moves: Move[]): string {
  const commandParts = command.split(",")
  const startupFrames: string[] = []

  commandParts.forEach((part, index) => {
    const currentCommand = commandParts.slice(0, index + 1).join(",")
    const move = moves.find((m) => m.command === currentCommand)

    if (move?.startup) {
      // Remove "i" and add the frame to the list
      const cleanedStartup = move.startup.replace(/i/g, "")
      startupFrames.push(cleanedStartup)
    }
  })

  // Join all startup frames with a comma and space, e.g., "10, 15, 13"
  return startupFrames.join(", ")
}
