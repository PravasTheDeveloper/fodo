import React from 'react'

export default function WelcomeSection() {
    return (
        <>
            <div className='w-full h-screen flex container mx-auto'>
                <div className='w-1/2 h-full flex  items-center'>
                    <div className='w-[70%] rounded-full overflow-hidden p-10 border-8 border-green-500 '>
                        <img src="/images/Welcome.png" className='' alt="" />
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center'>
                    <div className='welcome text-3xl text-green-500'>
                        Welcome
                    </div>
                    <div className='text-4xl font-semibold my-10'>
                        Welcome Fodo <br /> Resturant
                    </div>
                    <div className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a officia pariatur tempora, iste quia debitis. Pariatur unde voluptatum ex suscipit sunt illum consequatur incidunt labore atque error, corrupti debitis, cumque natus necessitatibus? Voluptatem quibusdam a voluptatum. Ut commodi esse quae deserunt dignissimos, est voluptas illum libero soluta quibusdam! Obcaecati maxime ab accusamus ad non ipsum placeat natus ut dolor?
                    </div>
                </div>
            </div>
        </>
    )
}
