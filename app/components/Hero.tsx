"use client"

import { Map } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { CHARACTERS, PATHS } from "@/data/variables"
import { Select, Group, Title, Flex, Transition, Body } from "@/ui/components"
import { Button } from "@/ui/primitives"

import { RoadmapModal } from "./RoadmapModal"
import { UpdateNotice } from "./UpdateNotice"

export function Hero() {
  const [character, setCharacter] = useState<string | undefined>(undefined)

  const handleCharacterChange = (value: string) => {
    setCharacter(value)
  }

  return (
    <Flex
      direction="column"
      p={{ base: "md", md: "lg" }}
      className="items-center lg:pt-40"
    >
      <div className="mx-auto mt-5 max-w-2xl text-center">
        <Title as="h1" size="hero" className="mb-1">
          welcome to tekken<span className="text-red-medium">.lol</span>
        </Title>
        <UpdateNotice />
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
          items={CHARACTERS.filter((char) => !char.disabled)}
          onChange={handleCharacterChange}
          placeholder="Choose  your fighter..."
          groupClassName="text-lg"
        />
      </Group>

      <Transition
        visible={!!character}
        className="mx-auto w-full max-w-[720px]"
      >
        {character && (
          <Flex
            gap="md"
            direction={{ base: "column", md: "row" }}
            className="mt-8 w-full md:justify-center"
          >
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}`}>Overview</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.ALL}`}>All Moves</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.HEAT}`}>Heat Moves</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.STANCES}`}>Stance Moves</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.PUNISHERS}`}>Punishers</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.THROWS}`}>Throws</Link>
            </Button>
            <Button asChild size="sm" className="mx-auto w-full max-w-xs">
              <Link href={`/${character}/${PATHS.WALL}`}>At the Wall</Link>
            </Button>
          </Flex>
        )}
      </Transition>

      <div className="mx-auto mt-auto inline-flex flex-col py-8">
        <RoadmapModal
          trigger={
            <Group asChild gap="sm" className="mb-2 text-xs">
              <Button size="sm" variant="outline">
                <Map size={18} />
                View roadmap
              </Button>
            </Group>
          }
        />
        <div className="mt-2 flex flex-col items-center justify-center gap-x-1 gap-y-1 sm:gap-x-1">
          <Group gap="xs">
            <span className="text-[10px] text-muted-foreground">
              Created by:
            </span>
            <span className="text-[10px] font-bold">
              shrimping vessel [🦐⛵]
            </span>
          </Group>

          <Group gap="xs">
            <span className="text-[10px] text-muted-foreground">
              Datasource:
            </span>
            <a
              href="https://wavu.wiki"
              target="_blank"
              className="text-[10px] font-bold hover:underline"
            >
              wavu.wiki,
            </a>
            <a
              href="https://tekkendocs.com"
              target="_blank"
              className="text-[10px] font-bold hover:underline"
            >
              tekkendocs
            </a>
          </Group>
        </div>
      </div>
    </Flex>
  )
}
