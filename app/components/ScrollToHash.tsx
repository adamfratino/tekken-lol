"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const ScrollToHash = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const id = hash.slice(1)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        const firstElement = document.querySelector("main")
        if (firstElement) {
          firstElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
  }, [pathname])

  return null
}
