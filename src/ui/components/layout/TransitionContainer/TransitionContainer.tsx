"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

type TransitionContainerProps = PropsWithChildren<{
  visible?: boolean
}>

export const TransitionContainer = ({
  children,
  visible = true,
}: TransitionContainerProps) => (
  <motion.div
    variants={{ invisible: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ ease: "easeInOut", duration: 0.25 }}
    animate={visible ? "visible" : "invisible"}
  >
    {children}
  </motion.div>
)
