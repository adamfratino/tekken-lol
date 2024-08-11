import { Metadata } from "next"
import { Footer, Header, Main } from "./components"
import Test from "./components/Test"

export const metadata: Metadata = {
  title: "tekken.lol",
}

export default function Web() {
  return (
    <>
      <Header />
      <Test />
      <Main />
      <Footer />
    </>
  )
}
