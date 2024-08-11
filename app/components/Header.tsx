import { Group } from "@/ui/components"
import { Text } from "@/ui/primitives"

export const Header = () => (
  <Group as="header" fullwidth p="lg" className="bg-primary">
    <nav>
      <Text className="text-background">nav</Text>
    </nav>
  </Group>
)
