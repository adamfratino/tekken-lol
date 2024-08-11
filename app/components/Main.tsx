import Image from "next/image"
import { Card, Group } from "@/ui/components"

export const Main = () => (
  <main>
    <Group fullwidth p="lg" gap="md" align="center">
      <Card className="min-h-[160px] max-w-[420px]" disabled>
        <Image
          src="/images/placeholder.png"
          width={640}
          height={360}
          alt="Looking down a hallway of peach arches"
        />
      </Card>
      <Card className="min-h-[160px] max-w-[420px]">
        <Image
          src="/images/placeholder.png"
          width={640}
          height={360}
          alt="Looking down a hallway of peach arches"
        />
      </Card>
    </Group>
  </main>
)
