import type { PropsWithChildren } from "react"
import { Sidebar, Header } from "app/components"
import { Stack } from "@/ui/components"
import type { CharacterPageProps } from "./types"

export default function CharacterLayout({
  params,
  children,
}: PropsWithChildren<CharacterPageProps>) {
  const { character } = params

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
      <Sidebar character={character} />
      <Stack>
        <Header />
        {children}
      </Stack>
    </div>
  )
}
