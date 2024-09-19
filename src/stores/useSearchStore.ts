import { create } from "zustand"

type SearchType = "mobile" | "desktop" | undefined

type SearchState = {
  active?: SearchType
  setActive: (isActive: SearchType) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  active: undefined,
  setActive: (isActive) => set({ active: isActive }),
}))
