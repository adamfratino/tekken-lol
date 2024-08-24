type ResponsiveProp<T extends string> = T | { [key: string]: T }

function isObject<T extends string>(
  value: unknown
): value is { [key: string]: T } {
  return typeof value === "object" && value !== null
}

export function getResponsiveClasses<T extends string>(
  prop: ResponsiveProp<T>,
  utility: Record<string, Record<string, string>>
): string[] {
  if (typeof prop === "string") {
    return utility.base![prop] ? [utility.base![prop]] : []
  }

  if (isObject(prop)) {
    return Object.entries(prop)
      .map(([breakpoint, value]) => {
        return utility[breakpoint]?.[value] || utility.base![value]
      })
      .filter(Boolean)
  }

  return []
}
