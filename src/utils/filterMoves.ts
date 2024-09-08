import type { Move } from "@/data/types"

export const filterHeatMoves = (moves: Move[]) =>
  moves.filter(
    (move) => move.tags && ["hb", "hs", "he"].some((tag) => tag in move.tags)
  )

export const filterWallMoves = (moves: Move[]) =>
  moves.filter(
    (move) => move.tags && ["bbr", "wc"].some((tag) => tag in move.tags)
  )
