"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"

import { PATHS } from "@/data/variables"
import { useNavigationStore } from "@/stores"
import { cn } from "@/ui/lib/utils"
import { Stack, Group, Badge } from "@/ui/components"

import {
  navLinksVariants,
  linkItemVariants,
} from "app/components/Header/sucomponents/motion.variants"

const itemVariants = cva(
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-yellow-lighter hover:text-primary justify-between",
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
    <motion.div variants={linkItemVariants}>
      <Link
        href={href ?? "#"}
        onClick={() => setActive(false)}
        className={cn(itemVariants({ variant }), {
          "w-full bg-yellow-light text-primary shadow-md hover:bg-yellow-light":
            active && variant === "yellow",
        })}
      >
        {children}
        {count && <Badge variant="count">{count}</Badge>}
      </Link>
    </motion.div>
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
    <AnimatePresence>
      <Stack asChild p={{ base: "sm", lg: "lg" }} gap="sm" w="full">
        <motion.div
          className="bg-gray-900 relative w-full"
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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
        </motion.div>
        {/* <Item>Launchers</Item> */}
      </Stack>
    </AnimatePresence>
  )
}
