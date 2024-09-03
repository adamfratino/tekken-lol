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
  heading?: string
  items: Item[]
}

type CommandProps = DialogProps & {
  placeholder: string
  empty: React.ReactNode
  groups: Group[]
  filter?: CommandRootProps["filter"]
}

export const Command = ({
  open,
  onOpenChange,
  defaultOpen,
  placeholder,
  empty,
  groups,
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

        {groups.map(({ heading, items }, i) => (
          <CommandGroup key={`${heading}__${i}`} heading={heading}>
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
        ))}
      </CommandList>
    </CommandDialog>
  </CommandRoot>
)
