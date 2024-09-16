import { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"

import { CharacterSearch, MovesSearch } from "app/components"
import { Overview } from "app/components/Overview/Overview"

export default async function CharacterOverviewPage({
  params,
}: CharacterPageProps) {
  const { character } = params
  const moves = await fetchCharacterFrames(character)

  return (
    <>
      <Overview character={character} />
      <MovesSearch moves={moves} />
      <CharacterSearch />
    </>
  )
}
