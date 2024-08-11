const features = [
  {
    name: "Dynamic search",
    description:
      "Press CTRL+K from anywhere to search for and navigate to a character or move. If you're browsing a characters moves your search list will be narrowed down by the filters your select, so be sure to check the search bar often!",
  },
  {
    name: "An advanced filtering system",
    description:
      "Select from a list of filters to dig deeper into a character's moves, or combine filters for even more refined results. The filters you select will update the searchable list of a character's moves, allowing you to stay focused.",
  },
  {
    name: "Blazing-fast performace",
    description:
      "Leveraging the latest web technologies, we deliver a seamless UI experience with advanced server and client-side data rendering, paired with aggressive caching strategies and PWA support for reliable offline use.",
  },
]

export default function Test() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to <span className="text-red-medium">tekken.lol</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-8">
            Whether you're beginning your journey or you're a seasoned vet, you
            can boost your game with our all-in-one learning hub. Explore
            detailed frame data, punishers, combos and more to improve your
            skills and get the upper hand in any matchup. Find your favorite
            moves using our advanced search or fine-tuned filters.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="text-gray-900 font-semibold">{feature.name}</dt>
              <dd className="text-gray-600 mt-1">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
