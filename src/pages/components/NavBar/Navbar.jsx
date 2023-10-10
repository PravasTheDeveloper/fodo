import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-[8%] container mx-auto flex justify-between items-center md:px-0 px-4'>
      <div className='text-2xl font-bold'>
        Fodo <span className='text-green-500'> .</span>
      </div>
      <div>
        <div className='flex'>
          <div className='ml-8 hover:text-green-500 cursor-pointer duration-200'>Home</div>
          <div className='ml-8 hover:text-green-500 cursor-pointer duration-200'>Menu</div>
          <div className='ml-8 hover:text-green-500 cursor-pointer duration-200'>Offers</div>
        </div>
      </div>
    </div>
  )
}
