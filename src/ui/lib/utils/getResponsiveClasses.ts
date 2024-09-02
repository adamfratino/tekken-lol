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
    const className = utility.base?.[prop]
    return className ? [className] : []
  }

  if (prop && isObject(prop)) {
    return Object.entries(prop)
      .map(([breakpoint, value]) => {
        return utility[breakpoint]?.[value] || utility.base?.[value]
      })
      .filter((className): className is string => Boolean(className)) // Filter out undefined
  }

  return []
}
