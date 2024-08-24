import { Card, Group, Title } from "@/ui/components"

const characters = [
  "Kazuya Mishima",
  "Jin Kazama",
  "King",
  "Jun Kazama",
  "Paul Phoenix",
  "Marshall Law",
  "Jack-8",
  "Lars Alexandersson",
  "Ling Xiayou",
  "Nina Williams",
  "Leroy Smith",
  "Asuka Kazama",
  "Lili Rochefort",
  "Bryan Fury",
  "Hwoarang",
  "Claudio Serafino",
  "Azucena Milagros Ortiz Castillo",
  "Raven",
  "Leo Kliesen",
  "Steve Fox",
  "Kuma",
  "Yoshimitsu",
  "Shaheen",
  "Sergei Dragunov",
  "Feng Wei",
  "Panda",
  "Lee Chaolan",
  "Alisa Bosconovitch",
  "Zafina",
  "Devil Jin",
  "Victor Chevalier",
  "Reina",
  "Eddy Gordo",
  "Lidia Sobieska",
  "Heihachi Mishima",
]

export const Main = () => (
  <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <Group gap="sm" wrap>
      {characters.map((char) => {
        const comingSoon = char === "Heihachi Mishima"

        return (
          <Card key={char} p="lg" interactive bordered disabled={comingSoon}>
            <Title>{char}</Title>
          </Card>
        )
      })}
    </Group>

    {/* <div
      className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no products
        </h3>
        <p className="text-sm text-muted-foreground">
          You can start selling as soon as you add a product.
        </p>
        <Button className="mt-4">Add Product</Button>
      </div>
    </div> */}
  </main>
)
