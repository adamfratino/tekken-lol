type BaseProps = React.PropsWithChildren<{
  className?: string
}>

type AsChildProps = BaseProps & {
  asChild: true
  as?: never
}

type AsElementProps<T extends React.ElementType> = BaseProps & {
  asChild?: false
  as?: T
}

export type TextProps<T extends React.ElementType> =
  | AsChildProps
  | AsElementProps<T>
