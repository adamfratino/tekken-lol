import { Body } from "@/ui/components"
import Link from "next/link"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    31 Oct 2024: +
    <a
      href="https://en.bandainamcoent.eu/tekken/news/tekken-8-patch-109"
      target="_blank"
      className="underline hover:no-underline"
    >
      1.09 patch notes
    </a>
  </Body>
)
