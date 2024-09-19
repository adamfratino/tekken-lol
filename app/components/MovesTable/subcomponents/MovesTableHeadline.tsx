import { Title } from "@/ui/components"

export const MovesTableHeadline = ({ text }: { text: string }) => (
  <Title
    as="h2"
    size="md"
    className="sticky top-[56px] z-10 bg-foreground px-4 py-2 text-sm text-background md:px-6 md:text-base"
  >
    {text}
  </Title>
)
