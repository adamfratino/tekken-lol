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
  const valueNum = value && value.split(" ")[0]!.replace(/[^\d~-]/g, "")

  let minValueNum: number | null = null

  if (valueNum && valueNum.includes("~")) {
    const rangeParts = valueNum.split("~")
    const minValue = rangeParts[0]
    minValueNum = parseFloat(minValue as string)
  } else if (valueNum) {
    minValueNum = parseFloat(valueNum)
  }

  return (
    <Stack
      className={cn("w-full rounded-md border shadow-md", className, {
        "bg-red-light": minValueNum !== null && minValueNum <= -10,
        "bg-yellow-light":
          minValueNum !== null && minValueNum <= 0 && minValueNum > -10,
        "bg-forest-light": minValueNum !== null && minValueNum >= 1,
      })}
    >
      <Property
        as="h2"
        variant="title"
        className="rounded-t-md border border-gray-lighter bg-gray-lightest/75 px-3 py-2 text-xs text-foreground dark:border-gray-darker dark:bg-gray-darkest/80"
      >
        {title}
      </Property>
      <div className="bg-primary-foreground/50 h-full overflow-y-auto rounded-b-md p-3">
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
