export const generateArgTypes = (obj: {}, category?: string) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const keys = Object.keys(value as any)
      const isBooleanCategory = keys.length === 1 && keys[0] === "true"
      return [
        key,
        {
          options: isBooleanCategory ? [true, false] : keys,
          control: { type: isBooleanCategory ? "boolean" : "select" },
          table: { category },
        },
      ]
    })
  )
}

export const coreArgTypes = () => {
  const category = "Core"

  return {
    as: { table: { category } },
    asChild: { table: { category } },
    children: { table: { category } },
    className: { table: { category } },
  }
}
