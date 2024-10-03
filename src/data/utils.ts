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

    // Remove duplicate moves
    data.framesNormal = removeDuplicateMoves(data.framesNormal)

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
    } as FrameData
  }
}

function removeDuplicateMoves(moves: Move[]): Move[] {
  const seen = new Set<string>()
  const uniqueMoves: Move[] = []

  for (const move of moves) {
    // Assuming 'wavuId' uniquely identifies a move
    if (!seen.has(move.wavuId)) {
      seen.add(move.wavuId)
      uniqueMoves.push(move)
    } else {
      console.warn(`Duplicate move found and removed: wavuId=${move.wavuId}`)
    }
  }

  return uniqueMoves
}

function applyFixes(moves: Move[], fixes: Fix[]): Move[] {
  // Group fixes by a unique identifier key
  const fixesByIdentifier: Map<string, Partial<Move>[]> = new Map()

  fixes.forEach((fix) => {
    // Generate a unique key for the identifier
    const identifierKey = generateIdentifierKey(fix.identifier)

    if (!fixesByIdentifier.has(identifierKey)) {
      fixesByIdentifier.set(identifierKey, [])
    }

    // Add the fix data to the corresponding identifier group
    fixesByIdentifier.get(identifierKey)!.push(fix.fix)
  })

  // Iterate over each group and apply all fixes to matching moves
  fixesByIdentifier.forEach((fixGroup, identifierKey) => {
    const identifier = JSON.parse(identifierKey) as Partial<Move>

    // Find all moves that match the identifier
    const matchingMoves = moves.filter((move) => isMatch(move, identifier))

    // Apply each fix in the group to the matching moves
    matchingMoves.forEach((move) => {
      fixGroup.forEach((fixData) => {
        Object.assign(move, fixData)
      })
    })
  })

  return moves
}

// Helper function to generate a unique key from the identifier object
function generateIdentifierKey(identifier: Partial<Move>): string {
  // Sort the keys to ensure consistent key generation
  const sortedKeys = Object.keys(identifier).sort()
  const sortedIdentifier: Record<string, any> = {}
  sortedKeys.forEach((key) => {
    sortedIdentifier[key] = (identifier as Record<string, any>)[key]
  })
  return JSON.stringify(sortedIdentifier)
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
