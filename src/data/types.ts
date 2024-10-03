import { CHARACTERS, HIT_LEVELS, TAGS, TAGS_DICTIONARY } from "@/data/variables"

/** @todo rename */
export type Character = {
  label: string
  value: string
  disabled?: boolean
  featured?: boolean
}

/** @todo rename to Character */
export type Characters = (typeof CHARACTERS)[number]["value"]
export type HitLevels = keyof typeof HIT_LEVELS
export type Tags = keyof typeof TAGS
export type TagsShort = keyof typeof TAGS_DICTIONARY

export type Move = {
  moveNumber: number
  command: string
  name: string
  hitLevel: string
  damage: string
  startup: string
  block: string
  hit: string
  counterHit: string
  notes: string
  wavuId: string
  tags: any
  recovery: string
}

export type FrameData = {
  characterName?: string
  editUrl?: string
  game?: string
  framesNormal: Move[]
  stances: string[]
}

export type PunishersType = {
  standing?: string[]
  crouching?: string[]
}

export type CharacterMeta = {
  name: string
  tagline: string
  country: string
  style: string
  description: string | string[]
  strengths?: string[]
  weaknesses?: string[]
  ssWeakness?: "Left" | "Right"
  heatSmashLevel?: "High" | "Mid" | "Low" | "Throw"
  heatSmashStartup?: number
  jabPunisher: string
  launchPunisher: string
  links?: { [key: string]: string }
  strategy?: {
    midRange?: object
    approach?: object
    closeRange?: object
  }
}

export interface CharacterPageProps {
  params: {
    character: Characters
    frames: FrameData[]
  }
}
