import { Link } from 'react-router-dom'
import logo from "../assets/img-folder/logog.png"
const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-sm border-gray-200 dark:bg">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                   <Link to="/"><img className=' w-40' src={logo} alt="" /></Link>
                    <div className="">
                        <ul className='flex flex-row p-4 md:p-0 mt-4 gap-8 text-center font-bold text-[#4D4D4D] text-[18px]'>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                               <Link to="/van">Van</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar