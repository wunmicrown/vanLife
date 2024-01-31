import { Link } from 'react-router-dom'
import'./VanPage.css'
const VanPage = () => {
  return (
    <>
        <div className=' mx-8 bg-[#FFF7ED]'>
            <h1 className='font-bold text-3xl mt-10'>Explore our van options</h1>
            <div className='flex justify-evenly gap-6  text-[#4D4D4D]'>
                <button className='linkBtn sm:mx-6 '><Link>Simple</Link></button>
                <button className='linkBtn sm:mx-6'><Link>Luxury</Link></button>
                <button className='linkBtn sm:mx-6'><Link>Rugged</Link></button>
                <button className='linkBtn sm:mx-6'><Link>Clear filters</Link></button>
            </div>

        </div>
    </>
  )
}

export default VanPage