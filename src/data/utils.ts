import { promises as fs } from "fs"
import path from "path"
import type {
  FrameData,
  Move,
  Characters,
  PunishersType,
  CharacterMeta,
} from "@/data/types"

type Fix = {
  identifier: Partial<Move>
  fix: Partial<Move>
}

async function fetchAndFixFrameData(character: Characters): Promise<FrameData> {
  const framesFilePath = path.join(
    process.cwd(),
    `app/api/characters/${character}/frames.json`
  )

  try {
    // Read frames.json
    const framesFile = await fs.readFile(framesFilePath, "utf8")
    const data = JSON.parse(framesFile) as FrameData

    // Read fixes.json
    const fixesFilePath = path.join(
      process.cwd(),
      `app/api/characters/${character}/fixes.json`
    )

    let fixes: Fix[] = []
    try {
      const fixesFile = await fs.readFile(fixesFilePath, "utf8")
      fixes = JSON.parse(fixesFile) as Fix[]
    } catch (fixesError) {
      // Handle errors when reading fixes.json
      const error = fixesError as NodeJS.ErrnoException
      if (error.code === "ENOENT") {
        // File does not exist, proceed without fixes, and don't log anything
        // Optionally, you can log a debug message if desired
        // console.debug(`No fixes.json file for character ${character}. Proceeding without fixes.`);
      } else {
        // Other errors (e.g., permission issues, invalid JSON)
        console.error(`Error reading fixes for ${character}:`, error.message)
      }
    }

    // Apply fixes to data.framesNormal
    if (fixes.length > 0) {
      data.framesNormal = applyFixes(data.framesNormal, fixes)
    }

    return data
  } catch (error) {
    console.error(`Error loading frames data for ${character}:`, error)
    // Return an empty FrameData object to prevent undefined issues
    return {
      framesNormal: [],
      stances: [],
      // Include other properties as needed
    } as FrameData
  }
}

function applyFixes(moves: Move[], fixes: Fix[]): Move[] {
  // For each fix
  fixes.forEach((fix) => {
    const identifier = fix.identifier
    const fixData = fix.fix

    // Find the move(s) that match the identifier
    const matchingMoves = moves.filter((move) => isMatch(move, identifier))

    // Apply the fix to each matching move
    matchingMoves.forEach((move) => {
      Object.assign(move, fixData)
    })
  })
  return moves
}

function isMatch(move: Move, identifier: Partial<Move>): boolean {
  return (Object.keys(identifier) as (keyof Move)[]).every(
    (key) => move[key] === identifier[key]
  )
}

export async function fetchCharacterFrames(
  character: Characters
): Promise<Move[]> {
  const data = await fetchAndFixFrameData(character)
  return data.framesNormal
}

export async function fetchCharacterStances(
  character: Characters
): Promise<string[]> {
  const data = await fetchAndFixFrameData(character)
  return data.stances
}

export async function fetchCharacterPunishers(
  character: Characters
): Promise<PunishersType> {
  const filePath = path.join(
    process.cwd(),
    `app/api/characters/${character}/punishers.json`
  )

  try {
    const file = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(file) as PunishersType
    return data
  } catch (error) {
    console.error(`Error loading frames data for ${character}:`, error)
    return { standing: undefined, crouching: undefined }
  }
}

export async function fetchCharacterMeta(
  character: Characters
): Promise<CharacterMeta> {
  const filePath = path.join(
    process.cwd(),
    `app/api/characters/${character}/meta.json`
  )

  try {
    const file = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(file) as CharacterMeta
    return data
  } catch (error) {
    console.error(`Error loading frames data for ${character}:`, error)
    return undefined as any
  }
}

export async function fetchCharacterThrows(
  character: Characters
): Promise<Move[]> {
  const data = await fetchAndFixFrameData(character)

  // Filter moves where hitLevel indicates a throw
  const throws = data.framesNormal.filter((move) => {
    const hitLevel = move.hitLevel.toLowerCase()
    const command = move.command.toLowerCase()
    const notes = move.notes ? move.notes.toLowerCase() : ""

    return (
      hitLevel === "th" ||
      hitLevel === "t" ||
      hitLevel.startsWith("th") ||
      hitLevel.startsWith("t") ||
      command.includes("throw") ||
      notes.includes("throw break")
    )
  })

  return throws
}
