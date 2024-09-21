import { ArrowBigLeftIcon, ArrowBigRightIcon } from "lucide-react"

import {
  Group,
  Stack,
  Title,
  Flex,
  Body,
  Card,
  type BodyVariantProps,
} from "@/ui/components"
import type { Characters } from "@/data/types"
import { fetchCharacterMeta } from "@/data/utils"
import { cn } from "@/ui/lib/utils"

const OverviewProperty = ({
  property,
  value,
  shade,
  className,
}: {
  property: string
  value: string
  shade?: BodyVariantProps["shade"]
  className?: string
}) => (
  <Group
    align="between"
    p="sm"
    className={cn("items-center border border-b-muted", className)}
  >
    <Body weight="bold">{property}:</Body>
    <Group gap="xs" className="items-center">
      {value === "Left" && (
        <ArrowBigLeftIcon size={18} className="fill-foreground" />
      )}
      <Body shade={shade!} weight="bold" size="lg">
        {value}
      </Body>
      {value === "Right" && (
        <ArrowBigRightIcon size={18} className="fill-foreground" />
      )}
    </Group>
  </Group>
)

export const OverviewHeader = async ({
  character,
}: {
  character: Characters
}) => {
  const {
    name,
    tagline,
    country,
    style,
    ssWeakness,
    heatSmashLevel,
    heatSmashStartup,
    jabPunisher,
    launchPunisher,
  } = await fetchCharacterMeta(character)

  return (
    <Flex direction={{ base: "column", md: "row" }} gap="md" w="full">
      <Stack
        asChild
        w={{ base: "full", md: "half" }}
        gap="sm"
        className="items-start"
      >
        <Card>
          <Title
            size="xs"
            className="w-full bg-foreground p-2 text-xs italic text-background"
          >
            {tagline}
          </Title>
          <Title as="h1" variant="headline" className="px-2 py-3">
            {name}
          </Title>

          <Stack w="full">
            <OverviewProperty property="Origin" value={country} />
            <OverviewProperty property="Fighting style" value={style} />
          </Stack>
        </Card>
      </Stack>

      <Card w={{ base: "full", md: "half" }}>
        <Title size="xs" className="bg-foreground p-2 text-background">
          Things to know:
        </Title>
        <OverviewProperty property="Jab punisher" value={jabPunisher} />
        <OverviewProperty property="Launch punisher" value={launchPunisher} />
        <OverviewProperty
          property="Heat Smash Startup"
          value={`${heatSmashStartup} frames`}
        />
        <OverviewProperty
          property="Heat Smash level"
          value={heatSmashLevel as string}
          shade={
            heatSmashLevel?.toLocaleLowerCase() as BodyVariantProps["shade"]
          }
        />
        <OverviewProperty
          property="Sidestep weakness"
          value={ssWeakness as string}
          className="rounded-b-md bg-yellow-lightest"
        />
      </Card>
    </Flex>
  )
}
