import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const useScrollToHash = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }, [pathname])
}
