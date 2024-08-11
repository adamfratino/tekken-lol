import Image from "next/image"
import { Card, Group, Stack } from "@/ui/components"

const SPACING = "lg"

const Container = ({ ...props }) => (
  <Group w="inner" gap={SPACING} align="center" {...props} />
)

const Placeholder = ({ disabled }: { disabled?: boolean }) => (
  <Card disabled={disabled} interactive className="flex-1 bg-background">
    <Stack align="evenly">
      <Image
        src="/images/placeholder.png"
        width={640}
        height={360}
        alt="Looking down a hallway of peach arches"
      />
      <div className="p-2">
        <h2 className="mb-1 text-lg font-semibold">
          Lorem ipsum dolor sit amet.
        </h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </Stack>
  </Card>
)

export const Main = () => (
  <Stack
    as="main"
    gap={SPACING}
    p={SPACING}
    fullwidth
    className="flex-1 bg-yellow-medium"
  >
    <Container>
      <Placeholder />
      <Placeholder disabled />
      <Placeholder />
    </Container>

    <Container>
      <Placeholder />
      <Placeholder />
      <Placeholder disabled />
    </Container>
  </Stack>
)
