import { CurrencyDollar, Star } from "phosphor-react"

type ReviewInfosProps = {
  rating: number
  price: number
  genres: string[]
}

export function ReviewInfos({ rating, price, genres }: ReviewInfosProps) {
  return (
    <div className="flex items-center justify-around border border-orange-800 p-10 mt-10 rounded shadow-md">
      <div className="">
        <h3 className="text-lg text-orange-900 font-bold">AVALIAÇÃO</h3>

        <div className="flex justify-center items-items mt-1 gap-1">
          <span>{rating}</span>
          <Star size={24} className="text-yellow-500" />
        </div>
      </div>

      <div>
        <h3 className="text-lg text-orange-900 font-bold">VALOR TOTAL</h3>

        <div className="flex items-items mt-1 justify-center gap-1">
          <span>{price}</span>
          <CurrencyDollar size={24} className="text-green-500" />
        </div>
      </div>

      <div>
        <h3 className="text-lg text-orange-900 font-bold">TAGS</h3>
        {genres.map((genre) => (
          <span className="mr-2 py-1 px-2 border border-zinc-600 rounded-lg text-xs text-zinc-700 bg-zinc-300 font-bold">
            {genre}
          </span>
        ))}
      </div>
    </div>
  )
}
