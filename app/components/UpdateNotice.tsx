import { Body } from "@/ui/components"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    Updated Oct 2, 2024 with{" "}
    <a
      href="https://en.bandainamcoent.eu/tekken/news/tekken-8-patch-108"
      target="_blank"
      className="underline hover:no-underline"
    >
      1.08 patch notes
    </a>
  </Body>
)
