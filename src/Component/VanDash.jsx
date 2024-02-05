import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './constants/api';
const VanDash = () => {
  const [data, setData] = useState([]); 
  const URL = `${API_URL}/api/vans`;
  
  useEffect(() => {
    axios.get(URL).then(res => {
      setData(res.data);
    });
  }, []);
  
  const displayedVans = data.slice(0, 3);
  
  return (
    <>
      <section>
        <h2 className='font-bold mx-10'>Your listed vans</h2>
        <div className='flex flex-wrap'> 
          <div className='mt' >
          {displayedVans.map(item => (
            <Link to={`/host/vans/${item.id}`} key={item.id}>
              <div className="rounded p-5 flex items-center bg-white">
                <img src={item.imageUrl} alt={item.name} className="w-44" />
                  <div className=' flex-col-reverse mx-8'>
                  <h2 className="text-xl font-bold md:text-xl max-sm:text-[13px]">{item.name}</h2>
                <p className="text-gray-600">${item.price}/day</p>
                  </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default VanDash;
