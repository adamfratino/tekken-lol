"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"
import { Box } from "@/ui/primitives"

type TransitionContainerProps = PropsWithChildren<{
  visible?: boolean
  className?: string
}>

export const Transition = ({
  visible = true,
  children,
  className,
  ...props
}: TransitionContainerProps) => (
  <Box asChild {...props}>
    <motion.div
      className={className}
      variants={{ invisible: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      animate={visible ? "visible" : "invisible"}
    >
      {children}
    </motion.div>
  </Box>
)
