import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "tekken.lol",
}

export default function Web() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
      <Link href="/feng">Feng Wei</Link>
    </div>
  )
}
