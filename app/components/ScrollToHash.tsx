"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const ScrollToHash = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        // Remove the '#' from the hash to get the actual ID
        const id = hash.slice(1)
        // Use getElementById instead of querySelector
        const element = document.getElementById(id)
        if (element) {
          // Scroll smoothly to the element
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
  }, [pathname])

  return null // This component doesn't render anything
}
