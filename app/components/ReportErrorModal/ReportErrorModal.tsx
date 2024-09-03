import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import type { Characters, Move } from "@/data/types"
import { MOVE_PROPERTIES } from "@/data/variables"
import { Group, Modal } from "@/ui/components"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from "@/ui/primitives"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/primitives/select"
import { getCharacterLabel } from "@/utils"

import { ReportModalSuccess } from "./subcomponents/ReportModalSuccess"

const UserSchema = z.object({
  property: z.enum(MOVE_PROPERTIES),
  problem: z.string(),
  solution: z.string().optional(),
})

export type UserType = z.infer<typeof UserSchema>

const timer = 5
const wait = () => new Promise((resolve) => setTimeout(resolve, timer * 1000))

type ReportErrorModalProps = {
  trigger: React.ReactNode
  character: Characters
  command: Move["command"]
}

export const ReportErrorModal = ({
  trigger,
  character,
  command,
}: ReportErrorModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const formattedName = getCharacterLabel(character)?.toUpperCase()
  const pathname = usePathname()
  const url = "http://tekken-lol.vercel.app" + pathname + "#" + command

  const form = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: UserType) => {
    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1279304628491780156/1aJwZmHWohJfb6LSLZc_N6oHDCbDvd-y_wlWODDNycjx7nBuNTkvDFYp0dJWPdfiEgrU"

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [
            {
              color: 14177041,
              title: `${formattedName}'s ${command} needs attention`,
              url: url,
              description: `A user has submitted a report regarding ${formattedName}'s frame data!`,
              timestamp: new Date().toISOString(),
              fields: [
                { name: "Command", value: command, inline: true },
                { name: "Property", value: data.property, inline: true },
                { name: "Problem", value: data.problem },
                { name: "Solution", value: data.solution ?? "-" },
              ],
            },
          ],
        }),
      })

      if (response.ok) {
        form.reset()
        setIsSubmitted(true)
        wait()
          .then(() => setIsOpen(false))
          .then(() => setTimeout(() => setIsSubmitted(false), 500))
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error posting to Discord", error)
      alert("There was an error submitting the form.")
    }
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={trigger}
      size="small"
      title={`${getCharacterLabel(character)} ${command} doesn't look right?`}
      description={
        <>
          Thanks for letting us know. Your feedback will be posted publicly in
          the <strong>#error-log</strong> channel on our very tiny{" "}
          <a
            href="https://discord.gg/KJd8sMY8w9"
            target="_blank"
            className="text-foreground underline hover:no-underline"
          >
            Discord server.
          </a>
        </>
      }
    >
      <Form {...form}>
        <form
          className="w-full space-y-6 pt-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="property"
            render={({ field }) => (
              <FormItem>
                <FormLabel autoFocus>
                  Which property needs to be fixed?
                </FormLabel>
                <Select
                  disabled={isSubmitted}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a move property" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {MOVE_PROPERTIES.map((property, i) => (
                      <SelectItem
                        key={property + i}
                        value={property}
                        className="cursor-pointer capitalize"
                      >
                        {property}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            required={false}
            control={form.control}
            name="problem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the problem?</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem>
                <Group
                  asChild
                  align="between"
                  w="full"
                  className="items-center"
                >
                  <FormLabel>
                    How can we fix it?{" "}
                    <span className="text-xs text-gray-dark">(optional)</span>
                  </FormLabel>
                </Group>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <ReportModalSuccess visible={isSubmitted} countdown={timer} />
    </Modal>
  )
}
