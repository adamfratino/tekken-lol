import * as React from "react"

import {
  Select as SelectPrimitive,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/primitives/select"
import { cn } from "@/ui/lib/utils"
import type { Character } from "@/data/types"

type SelectProps = {
  placeholder: string
  items: Character[]
  triggerClassName?: string
  groupClassName?: string
  itemClassName?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export function Select({
  placeholder,
  triggerClassName,
  groupClassName,
  itemClassName,
  items,
  autoFocus,
  onChange,
}: SelectProps) {
  return (
    <SelectPrimitive onValueChange={onChange}>
      <SelectTrigger
        className={cn("w-full", triggerClassName)}
        autoFocus={autoFocus}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className={groupClassName}>
          {items.map((item, i) => (
            <SelectItem
              key={item.label + i}
              value={item.value}
              className={item.featured ? "text-red-medium" : undefined}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPrimitive>
  )
}
