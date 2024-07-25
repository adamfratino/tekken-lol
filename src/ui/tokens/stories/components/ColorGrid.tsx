import { hexToHsl } from "../../../lib/utils"
import * as colors from "../../colors"
import { Text } from "@/ui/primitives"

const Swatch = ({ color }: { color: string }) => (
  <div className="h-[50px] flex-1" style={{ backgroundColor: color }} />
)

const Bold = ({ text }: { text: string }) => (
  <Text variant="h3" className="text-md m-0 font-semibold">
    {text}
  </Text>
)

export const ColorGrid = () => (
  <div className="w-full bg-background">
    {Object.entries(colors).map(([colorName, colorValue]) => (
      <>
        <h2 className="font-bold">{colorName}</h2>
        <div
          key={colorName + colorValue}
          className="mb-3 flex w-full items-center gap-3"
        >
          {Object.entries(colorValue).map(([shade, shadeValue]) => (
            <div
              key={`${colorName}-${shade}`}
              className="flex-1 overflow-hidden rounded-lg border shadow-sm hover:shadow-md"
            >
              <Swatch color={shadeValue as any} />
              <div className="p-2 text-center">
                <Bold text={shade} />
                <Text as="p">{shadeValue}</Text>
                <Text as="p">{hexToHsl(shadeValue)}</Text>
              </div>
            </div>
          ))}
        </div>
      </>
    ))}
  </div>
)
