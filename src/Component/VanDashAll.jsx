import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const VanDashAll = () => {
    const URL = 'http://localhost:5000/api/vans'
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(URL).then(res => {
            setData(res.data);
        });
    }, []);
    const displayedVans = data.slice(0, 1);
    return (
        <>
            <div>
                <Link to='/host/vans'><p className=" underline font-medium text-base mx-10">Back to all vans</p></Link>
            </div>

            <div className='flex pt-10'>
                <div>
                    {displayedVans.map(item => (
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
                    ))}
                </div>
            </div>
        </>
    )
}

export default VanDashAll