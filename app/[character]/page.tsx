import { CharacterPageProps } from "@/data/types"

import { CharacterSearch } from "app/components"
import { Overview } from "app/components/Overview/Overview"

export default async function CharacterOverviewPage({
  params,
}: CharacterPageProps) {
  const { character } = params

  return (
    <>
      <Overview character={character} />
      <CharacterSearch />
    </>
  )
}
