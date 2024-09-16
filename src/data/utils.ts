import { promises as fs } from "fs"
import path from "path"
import type {
  CharacterMeta,
  Characters,
  FrameData,
  Move,
  PunishersType,
} from "@/data/types"

export async function fetchCharacterFrames(
  character: Characters
): Promise<Move[]> {
  const filePath = path.join(
    process.cwd(),
    `app/api/characters/${character}/frames.json`
  )

  try {
    const file = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(file) as FrameData
    return data.framesNormal
  } catch (error) {
    console.error(`Error loading frames data for ${character}:`, error)
    return [] // Return an empty array instead of null
  }
}

export async function fetchCharacterStances(
  character: Characters
): Promise<string[]> {
  const filePath = path.join(
    process.cwd(),
    `app/api/characters/${character}/frames.json`
  )

  try {
    const file = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(file) as FrameData
    return data.stances
  } catch (error) {
    console.error(`Error loading frames data for ${character}:`, error)
    return [] // Return an empty array instead of null
  }
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
