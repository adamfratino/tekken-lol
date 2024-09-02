"use client"

import { Map } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CHARACTERS, PATHS } from "@/data/variables"
import {
  Select,
  TransitionContainer,
  Stack,
  Group,
  Modal,
  Title,
} from "@/ui/components"
import { Button } from "@/ui/primitives"
import { RoadmapModal } from "./RoadmapModal"

export function Hero() {
  const [character, setCharacter] = useState<string | undefined>(undefined)

  const handleCharacterChange = (value: string) => {
    setCharacter(value) // Update the selected character
  }

  return (
    <div className="-mt-2 flex min-h-screen flex-col items-center px-4 pt-48">
      <div className="mx-auto mt-5 max-w-2xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to tekken.lol
        </h1>
      </div>

      <div className="mx-auto mt-5 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Explore <span className="font-bold text-foreground">Tekken 8</span>{" "}
          frame data, punishers, heat moves, stances and more to improve your
          skills and get the upper hand in any matchup. Or{" "}
          <span className="font-bold text-foreground">get salty</span> and
          <span className="font-bold text-foreground"> rage-quit</span>, that's
          fine too.
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-1">
        <span className="text-sm text-muted-foreground">Created by:</span>
        <span className="text-sm font-bold">shrimping vessel (🦐 + ⛵)</span>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <Select
          autoFocus
          items={CHARACTERS}
          onChange={handleCharacterChange}
          placeholder="Choose your fighter..."
          groupClassName="text-lg"
        />
      </div>

      <TransitionContainer visible={!!character}>
        {character && (
          <Group gap="md" className="mt-12">
            <Button asChild size="sm">
              <Link href={`/${character}`}>All Moves</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={`/${character}/${PATHS.HEAT}`}>Heat Moves</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={`/${character}/${PATHS.STANCES}`}>Stance Moves</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={`/${character}/${PATHS.PUNISHERS}`}>Punishers</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={`/${character}/${PATHS.WALL}`}>At the Wall</Link>
            </Button>
          </Group>
        )}
      </TransitionContainer>

      <RoadmapModal />
    </div>
  )
}
