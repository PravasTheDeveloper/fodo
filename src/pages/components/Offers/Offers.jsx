import React from 'react'
import FoodCard from './FoodCard'
import OfferFood from '../../../../Data'

export default function Offers() {


    return (
        <>
            <div className='w-full h-auto container mx-auto py-10'>
                <div className='welcome text-green-500 text-xl text-center mb-7'>
                    Offers
                </div>
                <div className='text-4xl text-center mb-16'>
                    Best Offers For All
                </div>
                <div className='w-full h-[400px] flex flex-wrap justify-between'>
                    {
                        OfferFood.map((data, index) => {
                            return (<FoodCard
                                key={index}
                                name={data.name}
                                image={data.image}
                                price={data.price}
                                rating={data.rating}
                                offerPrice={data.offerPrice}
                            />)
                        })
                    }
                </div>
            </div>
        </>
    )
}
