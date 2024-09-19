import { CharacterPageProps } from "@/data/types"
import { fetchCharacterFrames } from "@/data/utils"

import {
  DesktopCharacterSearch,
  MobileMovesSearch,
  DesktopMovesSearch,
} from "app/components"
import { Overview } from "app/components/Overview/Overview"

export default async function CharacterOverviewPage({
  params,
}: CharacterPageProps) {
  const { character } = params
  const moves = await fetchCharacterFrames(character)

  return (
    <>
      <Overview character={character} />
      <DesktopCharacterSearch />
      <DesktopMovesSearch
        character={character}
        moves={moves}
        subpath={`/${character}/all`}
      />
      <MobileMovesSearch moves={moves} subpath={`/${character}/all`} />
    </>
  )
}
