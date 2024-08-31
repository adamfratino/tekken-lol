import { Button } from "@/ui/primitives"
import { Modal } from "@/ui/components"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/ui/primitives"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import type { Characters, Move } from "@/data/types"

const UserSchema = z.object({
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
  const form = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: UserType) => {
    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1279304628491780156/1aJwZmHWohJfb6LSLZc_N6oHDCbDvd-y_wlWODDNycjx7nBuNTkvDFYp0dJWPdfiEgrU" // replace with your webhook URL

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [
            {
              title: `:exclamation: ${character} needs attention :exclamation:`,
              description: `A user has submitted a report regarding ${character}'s frame data!`,
              timestamp: new Date().toISOString(),
              fields: [
                {
                  name: "Command",
                  value: command,
                },
                {
                  name: "Problem",
                  value: data.problem,
                },
                {
                  name: "Solution",
                  value: data.solution,
                },
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
          the <strong>#error-log</strong> channel on our{" "}
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
                <FormLabel>How can we fix it?</FormLabel>
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
