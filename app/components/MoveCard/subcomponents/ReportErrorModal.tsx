import { usePathname } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { zodResolver } from "@hookform/resolvers/zod"
import { getCharacterLabel } from "@/utils"

import type { Characters, Move } from "@/data/types"
import { MOVE_PROPERTIES } from "@/data/variables"

const UserSchema = z.object({
  property: z.enum(MOVE_PROPERTIES),
  problem: z.string(),
  solution: z.string(),
})

export type UserType = z.infer<typeof UserSchema>

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
  const formattedName = getCharacterLabel(character)?.toUpperCase()
  const pathname = usePathname()
  const url = "http://localhost:3000" + pathname + "#" + command

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
              title: `${formattedName} needs attention`,
              url: url,
              description: `A user has submitted a report regarding ${formattedName}'s frame data!`,
              timestamp: new Date().toISOString(),
              fields: [
                { name: "Command", value: command, inline: true },
                { name: "Property", value: data.property, inline: true },
                { name: "Problem", value: data.problem },
                { name: "Solution", value: data.solution },
              ],
            },
          ],
        }),
      })

      if (response.ok) {
        form.reset()
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
      trigger={trigger}
      size="small"
      title="Something doesn't look right?"
      description={
        <>
          Thanks for letting us know. Your feedback will be posted publically in
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
                <FormLabel>Which property needs to be fixed?</FormLabel>
                <Select
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
            control={form.control}
            name="problem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the problem?</FormLabel>
                <FormControl>
                  <Textarea autoFocus {...field} />
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
                    <span className="text-xs text-gray-dark">(optiona)</span>
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
    </Modal>
  )
}
