import { ExternalLink } from "lucide-react"
import type { Characters } from "@/data/types"
import { fetchCharacterMeta } from "@/data/utils"
import { Badge, Body, Card, Flex, Group, Stack, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"
import Link from "next/link"

type OverviewProps = {
  character: Characters
}

export const Overview = async ({ character }: OverviewProps) => {
  const {
    name,
    tagline,
    country,
    style,
    description,
    strengths,
    weaknesses,
    links,
  } = await fetchCharacterMeta(character)

  return (
    <Stack
      p={{ base: "sm", md: "xl" }}
      gap="xl"
      className="items-start"
      w="narrow"
    >
      <Stack gap="sm" className="items-start">
        <Badge className="px-6">{tagline}</Badge>
        <Title as="h1" variant="headline" className="mb-2">
          {name}
        </Title>

        <Group gap="sm">
          <Badge className="px-6">{country}</Badge>
          <Badge className="px-6">{style}</Badge>
        </Group>
      </Stack>

      <Stack gap="sm">
        {Array.isArray(description) ? (
          description.map((paragraph, i) => (
            <Body key={`description_${i}`} size="md">
              {paragraph}
            </Body>
          ))
        ) : (
          <Body size="md">{description}</Body>
        )}
      </Stack>

      {strengths && weaknesses && (
        <Flex direction={{ base: "column", md: "row" }} w="full" gap="md">
          <Card w="half" p="md">
            <Title variant="subheadline">Strengths</Title>
            <Stack as="ul" p="md" gap="md">
              {strengths?.map((strength) => (
                <Body key={strength} as="li" className="list-disc">
                  {strength}
                </Body>
              ))}
            </Stack>
          </Card>
          <Card w="half" p="md">
            <Title variant="subheadline">Weaknesses</Title>
            <Stack as="ul" p="md" gap="md">
              {weaknesses?.map((strength) => (
                <Body key={strength} as="li" className="list-disc">
                  {strength}
                </Body>
              ))}
            </Stack>
          </Card>
        </Flex>
      )}

      {links && (
        <Group gap="md">
          {Object.entries(links).map(([label, url]) => (
            <Button asChild>
              <Link key={url} href={url} target="_blank">
                {label} <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          ))}
        </Group>
      )}
    </Stack>
  )
}
