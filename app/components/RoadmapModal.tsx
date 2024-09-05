import { Map } from "lucide-react"
import { Modal, Stack, Group, Title } from "@/ui/components"
import { Button } from "@/ui/primitives"

type RoadmapModalProps = {
  trigger?: React.ReactNode
}

export const RoadmapModal = ({ trigger }: RoadmapModalProps) => (
  <Modal
    size="small"
    title=""
    trigger={
      trigger ?? (
        <Group asChild gap="sm" className="absolute bottom-8 text-xs">
          <Button size="sm" variant="outline">
            <Map size={18} />
            View roadmap
          </Button>
        </Group>
      )
    }
  >
    <Stack
      as="ol"
      gap={{ base: "md", md: "xl" }}
      className="ml-5 list-decimal text-sm"
    >
      <li>
        <div className="line-through">
          <Title size="md">Full-featured search &mdash; Sep. 2024</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Add moves and other details to the search bar.
          </p>
        </div>
      </li>

      <li>
        <div className="line-through">
          <Title size="md">Mobile-friendly &mdash; Sep. 2024</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Responsive styles, optimized mobile navigation and search,
            progressive web app (PWA) support.
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">Character overview &mdash; Sep. 2024</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Create an overview template for each character
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">Button mapping &mdash; Nov. 2024</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Create a tool that maps move commands to a button sequence.
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">
            Extend tags, filtering & categories &mdash; Jan. 2025
          </Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Find new tags to extract from frame data (natural combo, jails, chip
            damage, etc.), create a filtering system that persists on a single
            page and refines the frame data, and create new dedicated sidebar
            categories with subcategory links when active.
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">User accounts &mdash; Mar. 2025</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Save your favorites moves, rank the attributes of the roster,
            participate in community events and other exclusive content.
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">Quiz mode &mdash; May. 2025</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            How well do you know the roster? Test your frame knowledge with a
            quz, and keep track of your results if you're a member.
          </p>
        </div>
      </li>

      <li>
        <div>
          <Title size="md">Link move videos &mdash; Jun. 2025</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Link to video clips of each move.{" "}
            <span className="font-semibold italic">
              Please reach out if you have a library and would like to
              collaborate!
            </span>
          </p>
        </div>
      </li>

      {/* <li>
        <div>
          <Title size="md">Tekken GPT &mdash; Jan. 2026</Title>
          <p className="mt-1 max-w-[460px] text-xs text-muted-foreground">
            Leverage enhanced datasets and analytics to train a GPT model to
            answer questions regarding frame data, matchups, etc.
          </p>
        </div>
      </li> */}
    </Stack>
  </Modal>
)
