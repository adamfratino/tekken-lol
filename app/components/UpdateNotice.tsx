import { Body } from "@/ui/components"
import Link from "next/link"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    31 Dec 2024: +
    <Link href="/clive" className="underline hover:no-underline">
      Added Clive Rosfield
    </Link>
  </Body>
)
