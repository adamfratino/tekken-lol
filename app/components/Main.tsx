import { PropsWithChildren } from "react"
import { Card, Group, Property, Stack } from "@/ui/components"
import { Badge } from "@/ui/components/interactive/Badge/Badge"
import { cn } from "@/ui/lib/utils"
import type { BadgeVariantProps } from "@/ui/components/interactive/Badge/Badge.types"

const tags = [
  "Balcony Break",
  "Floor Break",
  "Heat Burst",
  "Heat Smash",
  "Heat Engager",
  "Homing Move",
  "Power Crush",
  "Tornado Move",
  "Low Crush",
  "High Crush",
  "Wall Crush",
  "Punisher",
]

const PropertyContainer = ({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) => (
  <Stack className={cn("w-full rounded-md border shadow-lg", className)}>
    <Property
      as="h2"
      variant="title"
      className="rounded-t-md bg-gray-medium px-3 py-2"
    >
      {title}
    </Property>
    <div className="bg-primary-foreground/50 h-full rounded-b-md p-3">
      {children}
    </div>
  </Stack>
)

const HitLevel = ({ shade }: { shade: BadgeVariantProps["shade"] }) => (
  <Badge variant="block" size="large" shade={shade} className="capitalize">
    <p>{shade}</p>
  </Badge>
)

export const Main = () => (
  <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <Card w="full" p="md" className="bg-gray-light/25 shadow-md">
      <Group w="full" gap="sm" className="overflow-hidden rounded-md">
        <Stack gap="sm" className="w-2/3">
          <PropertyContainer title="Command">
            <Property as="p" variant="primary">
              1, 1, 2
            </Property>
          </PropertyContainer>

          <PropertyContainer title="Button Sequence">
            [buttons]
          </PropertyContainer>

          <PropertyContainer title="Hit Levels">
            <Group gap="sm">
              <HitLevel shade="high" />
              <HitLevel shade="mid" />
              <HitLevel shade="low" />
            </Group>
          </PropertyContainer>

          <Group gap="sm" w="full">
            <PropertyContainer title="Startup Frames">
              <Property variant="secondary">10, 10, 12</Property>
            </PropertyContainer>
            <PropertyContainer title="Damage">
              <Property variant="secondary">8, 9, 11</Property>
            </PropertyContainer>
          </Group>

          <Group gap="sm" w="full">
            <PropertyContainer title="On Block">
              <Property variant="secondary">-9</Property>
            </PropertyContainer>
            <PropertyContainer title="On Hit">
              <Property variant="secondary">1</Property>
            </PropertyContainer>
            <PropertyContainer title="On CH">
              <Property variant="secondary">11</Property>
            </PropertyContainer>
          </Group>
        </Stack>

        <Stack gap="sm" className="w-1/3">
          <PropertyContainer title="Name">
            <Property as="p" variant="tertiary">
              Konshin Seikenzuki (Cancelled)
            </Property>
          </PropertyContainer>

          <PropertyContainer title="Special Properties" className="flex-none">
            <Group gap="sm" wrap>
              {tags.map((tag) => (
                <Badge key={tag} variant="block" shade={tag as any}>
                  {tag}
                </Badge>
              ))}
            </Group>
          </PropertyContainer>

          <PropertyContainer title="Notes" className="h-full">
            <Stack as="ul" gap="sm" className="ml-5 list-disc text-sm">
              <li>
                Absorb an attack to power up, which adds 8 chip damage when
                guarded
              </li>
              <li>Balcony Break</li>
              <li>Power crush 8~</li>
            </Stack>
          </PropertyContainer>
        </Stack>
      </Group>
    </Card>
  </main>
)
