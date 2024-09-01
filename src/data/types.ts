import { CHARACTERS, HIT_LEVELS, TAGS, TAGS_DICTIONARY } from "@/data/variables"

export type Character = {
  label: string
  value: string
  disabled?: boolean
}

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
