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
      <CharacterSelectModal
        characters={CHARACTERS}
        trigger={
          <Group asChild gap="sm">
            <Button>
              <Users size={18} />
              <p className="text-xs font-semibold">Select a character</p>
            </Button>
          </Group>
        }
      />

      {/* <MoveTagSelectModal
        tags={TAGS}
        trigger={
          <Group asChild gap="sm">
            <Button>
              <ListFilterIcon size={18} />
              <p className="text-xs font-semibold">Toggle filters</p>
            </Button>
          </Group>
        }
      /> */}

      <SearchButton text="Search moves, characters, etc." />
    </Group>
  </header>
)
