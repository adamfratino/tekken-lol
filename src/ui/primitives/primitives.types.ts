export type BaseProps = React.PropsWithChildren<{
  className?: string
  id?: string
}>

export type AsChildProps = BaseProps & {
  asChild: true
  as?: never
}

export type AsElementProps<T extends React.ElementType> = BaseProps & {
  asChild?: false
  as?: T
}

export type PrimitiveProps<T extends React.ElementType> =
  | AsChildProps
  | AsElementProps<T>
