
export interface Coffee {
    id: number,
    name: string,
    popular: boolean,
    available: boolean,
    image: string,
    price: string,
    rating: number,
    votes: number
}

interface CoffeeProps {
    item: Coffee,
}

const CoffeeItem = ({ item }: CoffeeProps) => {
    const { name, image, popular, available, price, rating, votes} = item

    return (
        <li className="">
            <div className="relative w-full">
                <img src={image} alt={name} className="w-full rounded-lg"/>
                { popular && <p className="absolute top-2 left-2 z-10 bg-light-yellow px-3 py-1 rounded-3xl">Popular</p>}
            </div>
            <div className="flex justify-between items-center pt-4">
                <h3 className="text-white">{name}</h3>
                <p className="px-2 py-1 bg-light-green rounded-lg">{price}</p>
            </div>
            <div className="flex justify-between items-center pt-2">
                <div className="flex text-white gap-1">
                    {rating ? <img src="/Star_fill.svg" alt="star" />: <img src="/Star.svg" alt="star" />}
                    {rating ? <span>{rating}</span> : <span className="text-dark-300"> No rating</span>}
                    {votes > 0 && <span className="text-dark-300">({votes})</span>}
                </div>
                {!available && <p className="text-red-500">Sold out!</p>}
            </div>
        </li>
    )
}

export default CoffeeItem
