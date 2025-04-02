import { Body } from "@/ui/components"
import Link from "next/link"

export const UpdateNotice = () => (
  <Body as="h2" size="xs" weight="semibold" className="italic">
    02 Apr 2025: +
    <Link
      href="https://discord.com/channels/1247963895956504586/1279303773629710368/1332182581931675660"
      target="_blank"
      className="underline hover:no-underline"
    >
      2.0 frame updates
    </Link>
    , add{" "}
    <Link href="/anna" className="underline hover:no-underline">
      anna
    </Link>
  </Body>
)
