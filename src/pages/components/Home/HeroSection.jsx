import React from 'react'

export default function HeroSection() {
    return (
        <>
            <div className='w-full h-[92%] flex items-center container mx-auto'>
                <div className='w-[60%]'>
                    <div className='w-[90%] h-full'>
                        <div className='text-6xl font-semibold leading-[80px]'>
                            Savoring Success with <span className='text-green-500'> Fodo's </span> Culinary Quest!
                        </div>
                        <div className='max-w-[70%] my-20'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus illum alias, voluptatem beatae doloremque expedita eveniet veritatis qui tempora.
                        </div>
                        <div className='w-auto h-[50px]'>
                            <input type="text" className='w-[300px] h-full rounded-full mr-6 px-5 outline-green-500' placeholder='Enter Your Email' />
                            <button className="h-full w-[100px] rounded-full bg-green-500 text-white font-semibold">Sent</button>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] flex items-center justify-end h-full'>
                    <div className='w-[80%] h-auto p-10 border-green-500 border-8 rounded-full'>
                        <img src="/images/HeroSection.png" className='w-[100%]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
