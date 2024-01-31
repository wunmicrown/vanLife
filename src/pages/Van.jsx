import React from 'react'

const Van = () => {
  return (
    <>
        <div className=' mx-8 bg-[#FFF7ED]'>
            <h1 className='font-bold text-3xl mt-10'>Explore our van options</h1>
            <div className='flex gap-20'>
                <button className='bg-[#FFEAD0]'>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button>Clear filters</button>
            </div>

        </div>
    </>
  )
}

export default Van