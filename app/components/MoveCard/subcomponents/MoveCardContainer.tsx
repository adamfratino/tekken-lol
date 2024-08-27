import type { PropsWithChildren } from "react"

import { Stack, Property } from "@/ui/components"
import { cn } from "@/ui/lib/utils"

type PropertyContainerProps = PropsWithChildren<{
  value?: string
  title: string
  className?: string
}>

export const MoveCardContainer = ({
  title,
  children,
  className,
  value,
}: PropertyContainerProps) => {
  const valueNum = value && value.split(" ")[0]!.replace(/[^\d-]/g, "")

  return (
    <Stack
      className={cn("w-full rounded-md border shadow-md", className, {
        "bg-red-light": valueNum && +valueNum <= -10,
        "bg-yellow-light": valueNum && +valueNum > -10 && +valueNum <= 9,
        "bg-forest-light": valueNum && +valueNum >= 10,
      })}
    >
      <Property
        as="h2"
        variant="title"
        className="rounded-t-md bg-gray-light/85 px-3 py-2"
      >
        {title}
      </Property>
      <div className="bg-primary-foreground/50 h-full rounded-b-md p-3">
        {value ? (
          <Property as="p" variant="secondary">
            {value}
          </Property>
        ) : (
          children
        )}
      </div>
    </Stack>
  )
}
