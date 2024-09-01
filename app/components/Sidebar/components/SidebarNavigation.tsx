"use client"

import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"
import { Stack } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import { PATHS } from "@/data/variables"

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
  }>

const Item = ({ children, active, variant = "yellow", href }: ItemProps) => (
  <Link
    href={href ?? "#"}
    className={cn(itemVariants({ variant }), {
      "bg-yellow-light text-primary hover:bg-yellow-light":
        active && variant === "yellow",
    })}
  >
    {children}
  </Link>
)

export const SidebarNavigation = ({ character }: { character: string }) => {
  const pathname = usePathname()
  const pathnameArray = pathname.split("/").filter((c) => c)

  return (
    <Stack p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
      <Item href={`/${character}`} active={pathnameArray.length === 1}>
        All moves
      </Item>
      <Item
        href={`/${character}/${PATHS.HEAT}`}
        active={pathnameArray[1] === PATHS.HEAT}
      >
        Heat moves
      </Item>
      <Item
        href={`/${character}/${PATHS.PUNISHERS}`}
        active={pathnameArray[1] === PATHS.PUNISHERS}
      >
        Punishers
      </Item>
      <Item>At the wall</Item>
      {/* <Item>Stances</Item> */}
      {/* <Item>Launchers</Item> */}
    </Stack>
  )
}
