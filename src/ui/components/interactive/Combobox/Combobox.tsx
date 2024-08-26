"use client"

import * as React from "react"
import { Check, ChevronsUpDown, UserIcon } from "lucide-react"

import { cn } from "@/ui/lib/utils"
import { Button } from "@/ui/primitives/button2"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/primitives/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/primitives/popover"
import { Group } from "../../layout"

type ComboboxItem = {
  value: string
  label: string
  icon?: React.ReactNode
}

type ComboboxProps = {
  items: ComboboxItem[]
  buttonClassName?: string
  itemsClassName?: string
}

export function Combobox({ items, buttonClassName }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", buttonClassName)}
        >
          <Group gap="sm" className="items-center">
            <UserIcon height={16} width={16} />
            {value
              ? items.find((item) => item.value === value)?.label
              : "Select character..."}
          </Group>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[360px] p-0">
        <Command>
          <CommandInput placeholder="Search characters..." />
          <CommandList>
            <CommandEmpty>No character found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
