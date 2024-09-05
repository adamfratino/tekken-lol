"use client"

import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"
import { Stack, Group, Badge } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import { PATHS } from "@/data/variables"
import { useNavigationStore } from "@/stores"

const itemVariants = cva(
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-yellow-lighter hover:text-primary",
  {
    variants: {
      variant: {
        neutral: "hover:bg-foreground hover:text-background",
        yellow: "hover:bg-yellow-light",
      },
    },
  }
)

type ItemProps = VariantProps<typeof itemVariants> &
  PropsWithChildren<{
    active?: boolean
    href?: string
    count?: number
  }>

const Item = ({
  children,
  active,
  variant = "yellow",
  href,
  count,
}: ItemProps) => {
  const setActive = useNavigationStore((s) => s.setActive)

  return (
    <Group asChild align="between">
      <Link
        href={href ?? "#"}
        onClick={() => setActive(false)}
        className={cn(itemVariants({ variant }), {
          "bg-yellow-light text-primary shadow-md hover:bg-yellow-light":
            active && variant === "yellow",
        })}
      >
        {children}
        {count && <Badge variant="count">{count}</Badge>}
      </Link>
    </Group>
  )
}

export type SidebarNavigationProps = {
  character: string
  count?: number
  heatCount?: number
  punisherCount?: number
  wallCount?: number
  stancesCount?: number
}

export const SidebarNavigation = ({
  character,
  count,
  heatCount,
  punisherCount,
  wallCount,
  stancesCount,
}: SidebarNavigationProps) => {
  const pathname = usePathname()
  const pathnameArray = pathname.split("/").filter((c) => c)

  return (
    <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
      <Item
        href={`/${character}`}
        active={pathnameArray.length === 1}
        count={count}
      >
        All moves
      </Item>
      <Item
        href={`/${character}/${PATHS.HEAT}`}
        active={pathnameArray[1] === PATHS.HEAT}
        count={heatCount}
      >
        Heat moves
      </Item>
      <Item
        href={`/${character}/${PATHS.STANCES}`}
        active={pathnameArray[1] === PATHS.STANCES}
        count={stancesCount}
      >
        Stance moves
      </Item>
      <Item
        href={`/${character}/${PATHS.PUNISHERS}`}
        active={pathnameArray[1] === PATHS.PUNISHERS}
        count={punisherCount}
      >
        Punishers
      </Item>
      <Item
        href={`/${character}/${PATHS.WALL}`}
        active={pathnameArray[1] === PATHS.WALL}
        count={wallCount}
      >
        At the wall
      </Item>
      {/* <Item>Launchers</Item> */}
    </Stack>
  )
}
