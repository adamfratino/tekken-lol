import { Users, ListFilterIcon } from "lucide-react"
import { Group } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { SearchButton } from "./Search"
import { CharacterSelectModal } from "./CharacterSelectModal"
import { MoveTagSelectModal } from "./MoveTagSelectModal"
import { CHARACTERS, TAGS } from "@/data/variables"

export const Header = () => (
  <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-2 lg:h-[60px] lg:px-4">
    <Group gap="sm">
      <SearchButton
        text="Search moves, characters, etc."
        className="fixed left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
    </Group>
  </header>
)
