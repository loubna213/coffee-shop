import { useEffect, useState } from "react"
import CoffeeItem, { Coffee } from "./CoffeeItem"

const CoffeeList = () => {
    const [coffeeList, setCoffeeList] = useState([])
    const [content, setContent] = useState('all')

    useEffect(() => {
        async function fetchCoffee() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
                const data = await res.json()
                setCoffeeList(data)

            } catch (error) {
                console.log(error)  
            }
        }
        fetchCoffee();
    }, [])



    return (
        <section className='max-container relative mt-[-9rem] max-md:mt-[-3rem] rounded-lg bg-dark-200 h-full w-4/5 max-md:w-[90%] flex flex-col justify-center items-center px-6 py-24'>
            <img src="/vector.svg" alt="vector" className="absolute top-4 left-[50%] translate-[-50%] z-[2]"/>
            <h1 className="capitalize font-semibold text-white text-4xl mb-4 z-10">Our Collection</h1>
            <p className="text-dark-300 max-w-[520px] text-center z-10">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className="flex gap-8 text-white pt-6">
                <button onClick={() => setContent('all')} className={`${content === 'all' && 'bg-dark-300 p-2 rounded-lg'} text-[14px]`}>All products</button>
                <button onClick={() => setContent('available')} className={`${content === 'available' && 'bg-dark-300 p-2 rounded-lg'} text-[14px`}>Available now</button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
                { content === 'all' ?
                    coffeeList.map((item: Coffee) => <CoffeeItem key={item.id} item={item} />)
                    : coffeeList.map((item: Coffee) => item.available && <CoffeeItem key={item.id} item={item} />)
                }
            </ul>
        </section>
    )
}

export default CoffeeList
