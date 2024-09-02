import { CHARACTERS } from "@/data/variables"
import { Select } from "@/ui/components"

export function Hero() {
  return (
    <div className="-mt-2 flex min-h-screen flex-col items-center pt-48">
      <div className="mx-auto mt-5 max-w-2xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to tekken.lol
        </h1>
      </div>

      <div className="mx-auto mt-5 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Explore <span className="font-bold text-foreground">Tekken 8</span>{" "}
          frame data, punishers, heat moves, stances and more to improve your
          skills and get the upper hand in any matchup. Or get salty and
          rage-quit, that's fine too.
        </p>
      </div>

      <div className="sm:gap-x- mt-5 flex items-center justify-center gap-x-1">
        <span className="text-sm text-muted-foreground">Created by:</span>
        <span className="text-sm font-bold">shrimping vessel</span>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <Select
          placeholder="Choose your fighter..."
          items={CHARACTERS}
          groupClassName="text-lg"
        />
      </div>
    </div>
  )
}
