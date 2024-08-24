import type { LayoutProps, ResponsiveProp, Padding } from "../layout.types"

type TestProps = Pick<LayoutProps, "p">

export const Test = ({ p }: TestProps) => <div>test</div>
