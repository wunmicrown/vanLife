import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Vandashnav from "./Vandashnav";



const VanDashAll = () => {
    const URL = 'http://localhost:5000/api/vans'
    const [data, setData] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        axios.get(URL).then(res => {
            setData(res.data[id]);
        });
    }, [id]);
    // const displayedVans = data.slice(0, 1);
    return (
        <>
            <div>
                <Link to='/host/vans'><p className=" underline font-medium text-base mx-10">Back to all vans</p></Link>
            </div>

            <div className='flex pt-10'>
                <div>
                    {/* {displayedVans.map(item => (
                        <Link to={`/host/vans/${item.id}`} key={item.id}>
                            <div className="rounded p-5 flex items-center">
                                <img src={item.imageUrl} alt={item.name} className="w-44" />
                                <div className=' flex-col-reverse mx-8'>
                                    <button className="bg-[#E17654] text-white p-3 rounded mb-8">Simple</button>
                                    <h2 className="text-xl font-bold md:text-xl max-sm:text-[13px]">{item.name}</h2>
                                    <p className="text-gray-600">${item.price}/day</p>
                                </div>
                            </div>
                        </Link>
                    ))} */}
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                            <img src={data.imageUrl} alt="" className="lg:w-36" />
                        </div>
                        <div className="w-full md:w-1/2 px-4 ">
                            <button className="bg-[#E17654] text-white font-semibold p-3 rounded mt-8">Simple</button>
                            <h1 className="text-lg font-semibold mt-4">{data.name}</h1>
                            <h2 className="text-lg font-semibold mt-4"><span className=" font-medium">${data.price}</span>/day</h2>
                            <p className=" max-md:mb-10 mt-4 font-bold mb-5">{data.description}</p>
                            {/* <button className="bg-[#FF8C38] w-full text-white mb-20 p-2 text-center font-bold text-[18px] rounded ">Rent this van</button> */}

                        </div>
                    </div>
                </div>
            </div>
                    <Vandashnav/>
        </>
    )
}

export default VanDashAll