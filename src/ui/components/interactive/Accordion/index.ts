"use client"

import { Root } from "@radix-ui/react-accordion"
import { AccordionContent, AccordionItem, AccordionTrigger } from "./components"

export const Accordion = Object.assign(Root, {
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})
