import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-sm border-gray-200 dark:bg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h1 className='font-[900] text-3xl fixed' >#VANLIFE</h1>
                    </a>

                    <div className="">
                        <ul className='flex flex-row p-4 md:p-0 mt-4 gap-8'>
                            <li>
                                <a className=' py-2 font-bold text-2xl '>About</a>
                            </li>
                            <li>
                                <a className=' py-2 '>Vans</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar