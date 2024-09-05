import { create } from "zustand"

type SearchState = {
  active: boolean
  setActive: (isActive: boolean) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  active: false,
  setActive: (isActive) => set({ active: isActive }),
}))
