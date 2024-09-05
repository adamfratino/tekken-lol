import { create } from "zustand"

type NavigationState = {
  active: boolean
  setActive: (isActive: boolean) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  active: false,
  setActive: (isActive) => set({ active: isActive }),
}))
