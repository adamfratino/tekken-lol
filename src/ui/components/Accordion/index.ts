import { Root } from "@radix-ui/react-accordion"
import { AccordionItem, AccordionTrigger, AccordionContent } from "./components"

export const Accordion = Object.assign(Root, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})
