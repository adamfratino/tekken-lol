"use client"

import { Map } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CHARACTERS, PATHS } from "@/data/variables"
import { Select, Group, Title, Flex, Transition, Body } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { RoadmapModal } from "./RoadmapModal"

export function Hero() {
  const [character, setCharacter] = useState<string | undefined>(undefined)

  const handleCharacterChange = (value: string) => {
    setCharacter(value)
  }

  return (
    <Flex
      direction="column"
      p={{ base: "md", md: "lg" }}
      className="min-h-screen items-center lg:pt-40"
    >
      <div className="mx-auto mt-5 max-w-2xl text-center">
        <Title as="h1" size="hero">
          Welcome to tekken.lol
        </Title>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Body
          as="p"
          className="text-md mt-6 max-w-[540px] text-muted-foreground md:text-lg"
        >
          Explore <span className="font-bold text-foreground">Tekken 8</span>{" "}
          frame data, punishers, heat moves, stances and more to improve your
          skills and get the upper hand in any matchup. Or{" "}
          <span className="font-bold text-foreground">get salty</span> and
          <span className="font-bold text-foreground"> rage-quit</span>, that's
          fine too.
        </Body>
      </div>

      <Group
        w="full"
        gap="sm"
        className="mx-auto mt-8 max-w-[320px] justify-center md:max-w-[540px]"
      >
        <Select
          autoFocus
          items={CHARACTERS}
          onChange={handleCharacterChange}
          placeholder="Choose  your fighter..."
          groupClassName="text-lg"
        />
      </Group>

      <Transition visible={!!character} className="w-full">
        {character && (
          <Flex
            gap="md"
            direction={{ base: "column", md: "row" }}
            className="mt-8 w-full md:justify-center"
          >
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
          </Flex>
        )}
      </Transition>

      <div className="mx-auto mt-auto inline-flex flex-col">
        <div className="mb-2 mt-5 flex items-center justify-center gap-x-1 sm:gap-x-1">
          <span className="text-sm text-muted-foreground">Created by:</span>
          <span className="text-sm font-bold">shrimping vessel [🦐 + ⛵]</span>
        </div>
        <RoadmapModal
          trigger={
            <Group asChild gap="sm" className="text-xs">
              <Button size="sm" variant="outline">
                <Map size={18} />
                View roadmap
              </Button>
            </Group>
          }
        />
      </div>
    </Flex>
  )
}
