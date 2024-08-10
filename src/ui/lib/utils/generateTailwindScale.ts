export const generateTailwindScale = (
  prefix: string,
  value: number,
  maxGap: number
) => {
  const gapObject: Record<string, boolean> = {}

  for (let i = 1; i <= maxGap; i++) {
    gapObject[`${prefix}-${i}`] = value === i
  }

  return gapObject
}
