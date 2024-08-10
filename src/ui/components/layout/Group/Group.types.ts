const gaps = [0, 1, 2, 3, 4, 5, 6] as const

type Gap = (typeof gaps)[number]

export type GroupProps = {
  gap?: (typeof gaps)[number]
}
