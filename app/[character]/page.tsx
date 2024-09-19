import { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"

import { CharacterSearch, MobileMovesSearch, MovesSearch } from "app/components"
import { Overview } from "app/components/Overview/Overview"

export default async function CharacterOverviewPage({
  params,
}: CharacterPageProps) {
  const { character } = params
  const moves = await fetchCharacterFrames(character)

  return (
    <>
      <Overview character={character} />
      <CharacterSearch />
      <MovesSearch
        character={character}
        moves={moves}
        subpath={`/${character}/all`}
      />
      <MobileMovesSearch moves={moves} subpath={`/${character}/all`} />
    </>
  )
}
