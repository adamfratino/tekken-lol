type ArgTypeInput = {
  obj: Record<string, any>
  name?: string
}

export const generateArgTypes = (
  inputs: ArgTypeInput[] | Record<string, any>,
  category?: string
) => {
  const inputArray: ArgTypeInput[] = Array.isArray(inputs)
    ? (inputs as ArgTypeInput[])
    : [{ obj: inputs }]

  return Object.fromEntries(
    inputArray.flatMap(({ obj, name }) =>
      Object.entries(obj).map(([key, value]) => {
        const keys = Object.keys(value as any)
        const isBooleanCategory = keys.length === 1 && keys[0] === "true"

        return [
          name || key,
          {
            options: keys,
            control: { type: isBooleanCategory ? "boolean" : "select" },
            table: { category },
          },
        ] as const
      })
    )
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
