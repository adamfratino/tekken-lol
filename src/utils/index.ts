import { CHARACTERS } from "@/data/variables"

export const getCharacterLabel = (value: string): string | undefined => {
  const character = CHARACTERS.find((char) => char.value === value)
  return character ? character.label.toLowerCase() : undefined
}
