"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Search } from "lucide-react"

import type { Characters } from "@/data/types"
import { Button } from "@/ui/primitives"

import { useSearchStore } from "@/stores"

type MobileSearchButtonProps = {
  character: Characters
}

export const MobileSearchButton = ({ character }: MobileSearchButtonProps) => {
  const { active, setActive } = useSearchStore()
  const router = useRouter()

  useEffect(() => {
    if (active) {
      const mainPagePath = `/${character}/all`
      router.prefetch(mainPagePath)
    }
  }, [active, character, router])

  return (
    <Button
      className="flex items-center rounded-md bg-yellow-medium px-4 py-2 shadow-md hover:bg-yellow-lighter md:hidden"
      onClick={() => setActive("mobile")}
    >
      <Search size={16} color="black" />
    </Button>
  )
}
