import { Search, Users, ListFilterIcon } from "lucide-react"
import { Group } from "@/ui/components"
import { Button } from "@/ui/primitives"
import { CharacterSelectModal } from "./CharacterSelectModal"
import { MoveTagSelectModal } from "./MoveTagSelectModal"
import { CHARACTERS, TAGS } from "@/data/variables"

export const Header = () => (
  <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-2 lg:h-[60px] lg:px-4">
    <Group gap="sm">
      <Button>
        <Search size={18} />
      </Button>
      <CharacterSelectModal
        characters={CHARACTERS}
        trigger={
          <Button>
            <Users size={18} />
          </Button>
        }
      />
      <MoveTagSelectModal
        tags={TAGS}
        trigger={
          <Button>
            <ListFilterIcon size={18} />
          </Button>
        }
      />
    </Group>
  </header>
)
