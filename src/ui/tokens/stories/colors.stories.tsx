import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import * as colors from "../colors"

const Container = ({
  key,
  children,
}: {
  key: string
  children: React.ReactNode
}) => (
  <div
    key={key}
    style={{
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: "20px",
      width: "100%",
    }}
  >
    {children}
  </div>
)

const Swatch = ({ color }: { color: string }) => (
  <div style={{ backgroundColor: color, flex: 1, height: 50 }} />
)

const Text = ({ text }: { text: string }) => (
  <p style={{ fontSize: 10, fontFamily: "sans-serif", margin: 0 }}>{text}</p>
)

const Test = () => {
  const renderColors = () => {
    return Object.entries(colors).map(([colorName, colorValue]) => {
      if (typeof colorValue === "string") {
        return (
          <Container key={colorName}>
            <div style={{ width: "100%" }}>
              <Swatch color={colorValue} />
              <Text text={colorName} />
              <Text text={colorValue} />
            </div>
          </Container>
        )
      } else {
        return (
          <Container key={colorName}>
            {Object.entries(colorValue).map(([shade, shadeValue]) => (
              <div key={`${colorName}-${shade}`} style={{ flex: 1 }}>
                <Swatch color={shadeValue} />
                <Text text={colorName + " " + shade} />
                <Text text={shadeValue} />
              </div>
            ))}
          </Container>
        )
      }
    })
  }

  return <div style={{ width: "100%" }}>{renderColors()}</div>
}

const meta: Meta<typeof Test> = {
  component: Test,
  title: "tokens",
  tags: ["!autodocs"],
}

export default meta
type Story = StoryObj<typeof Test>

export const Colors: Story = { name: "colors" }
