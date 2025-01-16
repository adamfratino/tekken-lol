import { Body } from "@/ui/components"
import Link from "next/link"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    16 Jan 2025: +
    <Link
      href="https://www.tekken-official.jp/tekken_news/?p=689"
      target="_blank"
      className="underline hover:no-underline"
    >
      Update Clive v1.11.00 balance changes
    </Link>
  </Body>
)
