import {
  CommandDialog,
  type CommandDialogProps,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandRoot,
  type CommandRootProps,
} from "./Command.primitives"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../../interactive"

type DialogProps = Pick<
  CommandDialogProps,
  "open" | "onOpenChange" | "defaultOpen"
>

type Item = {
  label: React.ReactNode
  value: string
  onSelect: () => void
}

type Group = {
  heading: string
  items: Item[]
}

type CommandProps = DialogProps & {
  placeholder: string
  empty: React.ReactNode
  groups: Group[]
  filter?: CommandRootProps["filter"]
  defaultValue?: string
}

export const Command = ({
  open,
  onOpenChange,
  defaultOpen,
  placeholder,
  empty,
  groups,
  defaultValue,
  filter,
}: CommandProps) => (
  <CommandRoot filter={filter} className={!open ? "hidden" : undefined}>
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{empty}</CommandEmpty>

        <Tabs
          defaultValue={defaultValue || groups[0]!.heading}
          className="w-full"
        >
          <TabsList className="sticky top-0 z-10 grid grid-cols-2 rounded-none">
            {groups.map(({ heading }, i) => (
              <TabsTrigger key={`${heading}_trigger_${i}`} value={heading}>
                {heading}
              </TabsTrigger>
            ))}
          </TabsList>
          {groups.map(({ heading, items }, i) => (
            <TabsContent key={`${heading}_trigger_${i}`} value={heading}>
              <CommandGroup key={`${heading}__${i}`}>
                {items.map(({ label, value, onSelect }, i) => (
                  <CommandItem
                    key={value + i + i}
                    onSelect={onSelect}
                    className="cursor-pointer"
                  >
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </TabsContent>
          ))}
        </Tabs>
      </CommandList>
    </CommandDialog>
  </CommandRoot>
)
