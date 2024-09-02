import { Stack, Title } from "@/ui/components"
import { cn } from "@/ui/lib/utils"
import { motion } from "framer-motion"

export const framerVariants = {
  invisible: { opacity: 0 },
  visible: { opacity: 1 },
} as const

export const ReportModalSuccess = ({ visible }: { visible?: boolean }) => (
  <Stack
    asChild
    gap="md"
    className={cn(
      "pointer-events-none invisible absolute left-0 top-0 h-full w-full place-content-center bg-background p-6",
      {
        "pointer-events-auto visible": visible,
      }
    )}
  >
    <motion.div
      variants={framerVariants}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      animate={visible ? "visible" : "invisible"}
    >
      <Title as="h2">Thanks for your submission!</Title>
      <p className="text-sm text-muted-foreground">
        Reports like this help us keep our data free from inaccurate
        information. IF you want to follow up on your submission head over to
        our very tiny Discord server, where you can also leave feedback and
        request features.
      </p>
    </motion.div>
  </Stack>
)
