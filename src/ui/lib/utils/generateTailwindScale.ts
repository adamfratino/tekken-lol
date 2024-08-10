export const generateTailwindScale = (gap: number, maxGap: number) => {
  const gapObject: Record<string, boolean> = {}

  for (let i = 1; i <= maxGap; i++) {
    gapObject[`gap-${i}`] = gap === i
  }

  return gapObject
}
