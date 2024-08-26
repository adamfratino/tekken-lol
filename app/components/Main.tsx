import { Stack } from "@/ui/components"
import { MoveCard } from "./MoveCard"

export const Main = () => (
  <Stack as="main" gap={{ base: "lg", sm: "xl" }} p="lg">
    <MoveCard />
    <MoveCard />
    <MoveCard />
    <MoveCard />
  </Stack>
)
