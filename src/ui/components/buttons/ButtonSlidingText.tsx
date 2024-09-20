"use client"

import type { LucideIcon } from "lucide-react"
import { useState, useEffect, type ButtonHTMLAttributes } from "react"

import { cn } from "@/ui/lib/utils"

import { Group } from "../layout"

type ButtonSlidingTextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: LucideIcon
  defaultText: string
  activeText: string
  msToDeactivate?: number
  className?: string
}

export const ButtonSlidingText = ({
  icon,
  defaultText,
  activeText,
  msToDeactivate = 2000,
  onClick,
  className,
  ...props
}: ButtonSlidingTextProps) => {
  const Icon = icon

  const [active, setActive] = useState(false) // Initialize active state

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (active) {
      timeout = setTimeout(() => setActive(false), msToDeactivate)
    }
    return () => clearTimeout(timeout)
  }, [active, msToDeactivate])

  return (
    <button
      onClick={(event) => {
        if (onClick) onClick(event)
        setActive(true)
      }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-background px-2 py-1 text-xs font-semibold shadow-md transition duration-300 ease-out hover:bg-blend-darken active:scale-95",
        className
      )}
      {...props}
    >
      <Group gap="md" className="items-center">
        {Icon && <Icon size={14} />}
        <span
          className={cn(
            "ease absolute inset-0 flex size-full -translate-x-full items-center justify-center text-foreground duration-100",
            {
              "ml-2": icon,
              "translate-x-0": active,
            }
          )}
        >
          {activeText}
        </span>
        <span
          className={cn(
            "text-purple-500 ease absolute flex size-full transform items-center justify-center transition-all duration-300",
            {
              "translate-x-full": active,
            }
          )}
        >
          {defaultText}
        </span>
        <span className="invisible relative">{defaultText}</span>
      </Group>
    </button>
  )
}
