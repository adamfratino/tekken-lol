import { Metadata } from "next"
import { Footer, Header, Main } from "./components"

export const metadata: Metadata = {
  title: "Tekken.lol",
}

export default function Web() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
