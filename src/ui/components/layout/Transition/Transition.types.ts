// import type { VariantProps } from "class-variance-authority"
import type { BoxProps } from "@/ui/primitives"
import type { LayoutProps } from "../layout.types"
// import { variants } from "./Transition.variants"

// export type TransitionVariantProps = VariantProps<typeof variants>
export type TransitionLayoutProps = Pick<LayoutProps, "p">

export type TransitionProps<T extends React.ElementType> = Omit<
  BoxProps<T>,
  "as" | "asChild"
> &
  // TransitionVariantProps &
  TransitionLayoutProps
