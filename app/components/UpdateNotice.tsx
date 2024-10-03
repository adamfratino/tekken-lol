import { Body } from "@/ui/components"
import Link from "next/link"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    2 Oct 2024: +
    <Link
      href="/heihachi"
      className="text-red-medium underline hover:no-underline"
    >
      Heihachi Mishima
    </Link>
    , +
    <a
      href="https://en.bandainamcoent.eu/tekken/news/tekken-8-patch-108"
      target="_blank"
      className="underline hover:no-underline"
    >
      1.08 patch notes
    </a>
  </Body>
)
