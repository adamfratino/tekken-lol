import {
  CommandDialog,
  type CommandDialogProps,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./Command.primitives"

type DialogProps = Pick<
  CommandDialogProps,
  "open" | "onOpenChange" | "defaultOpen"
>

type Item = {
  label: string
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
}

export const Command = ({
  open,
  onOpenChange,
  defaultOpen,
  placeholder,
  empty,
  groups,
}: CommandProps) => (
  <CommandDialog
    open={open}
    onOpenChange={onOpenChange}
    defaultOpen={defaultOpen}
  >
    <CommandInput placeholder={placeholder} />
    <CommandList>
      <CommandEmpty>{empty}</CommandEmpty>

      {groups.map(({ heading, items }) => (
        <CommandGroup key={heading} heading={heading}>
          {items.map(({ label, value, onSelect }) => (
            <CommandItem
              key={value}
              onSelect={onSelect}
              className="cursor-pointer"
            >
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      ))}
    </CommandList>
  </CommandDialog>
)
