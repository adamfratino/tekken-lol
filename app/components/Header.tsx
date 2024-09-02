import { Move } from "@/data/types"
import { Group } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import { SearchButton } from "./Search"

type HeaderProps = {
  moves: Move[]
}

export const Header = ({ moves }: HeaderProps) => (
  <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-2 lg:h-[60px] lg:px-4">
    <Group gap="sm" w="full">
      <SearchButton
        moves={moves}
        text="Search moves, characters, etc."
        className={cn(
          "w-full",
          "lg:fixed lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
        )}
      />
    </Group>
  </header>
)
