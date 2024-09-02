"use client"

import { motion } from "framer-motion"
import { ChevronRightCircle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/ui/primitives"
import { Group, Stack, Title } from "@/ui/components"
import { cn } from "@/ui/lib/utils"

type ReportModalSuccessProps = {
  visible?: boolean
  countdown?: number
}

export const ReportModalSuccess = ({
  visible,
  countdown,
}: ReportModalSuccessProps) => {
  const [seconds, setSeconds] = useState(countdown)

  useEffect(() => {
    if (visible && seconds! > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds! - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [visible, seconds])

  return (
    <Stack
      asChild
      gap="md"
      className={cn(
        "pointer-events-none invisible absolute left-0 top-0 h-full w-full items-center justify-center bg-background p-6",
        {
          "pointer-events-auto visible": visible,
        }
      )}
    >
      <motion.div
        variants={{ invisible: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ ease: "easeInOut", duration: 0.25 }}
        animate={visible ? "visible" : "invisible"}
      >
        <Stack gap="lg" className="max-w-[360px]">
          <Title as="h2">Thanks for your submission!</Title>
          <p className="text-sm text-muted-foreground">
            Reports like this help us keep our data free from inaccurate
            information. If you'd like to follow up on your submission, head
            over to our very tiny Discord server. Once you're there, you can
            also leave feedback and request new features!
          </p>
          <Group asChild gap="md">
            <Button asChild className="my-2 self-start">
              <Link href="https://discord.gg/KJd8sMY8w9" target="_blank">
                Check out the Discord
                <ChevronRightCircle size={14} />
              </Link>
            </Button>
          </Group>
        </Stack>
        <p className="absolute bottom-4 left-4 text-xs font-bold">
          Closing in {seconds}
        </p>
      </motion.div>
    </Stack>
  )
}
