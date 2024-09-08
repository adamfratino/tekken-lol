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
  items: Item[]
}

type CommandProps = DialogProps & {
  placeholder: string
  empty: React.ReactNode
  items: Group["items"]
  filter?: CommandRootProps["filter"]
  defaultValue?: string
}

export const Command = ({
  open,
  onOpenChange,
  defaultOpen,
  placeholder,
  empty,
  items,
  filter,
}: CommandProps) => (
  <CommandRoot filter={filter} className={!open ? "hidden" : undefined}>
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      className="w-11/12"
    >
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{empty}</CommandEmpty>

        <CommandGroup>
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
      </CommandList>
    </CommandDialog>
  </CommandRoot>
)
