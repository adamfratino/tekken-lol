import { SpeedInsights } from "@vercel/speed-insights/next"
import type { PropsWithChildren } from "react"
import "@/ui/styles/globals.css"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex min-h-[100dvh] flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
