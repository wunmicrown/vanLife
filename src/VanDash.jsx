import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VanDash = () => {
  const [data, setData] = useState([]); // Initialize data state
  const URL = 'http://localhost:5000/api/vans';
  
  useEffect(() => {
    axios.get(URL).then(res => {
      setData(res.data); // Set data state with fetched data
    });
  }, []);
  
  // Slice the data array to show only the first three vans
  const displayedVans = data.slice(0, 3);
  
  return (
    <>
      <section>
        <h2 className='font-bold mx-10'>Your listed vans</h2>
        <div className='flex'> 
          <div>
          {displayedVans.map(item => (
            <Link to={`/host/vans/${item.id}`} key={item.id}>
              <div className="rounded p-5 flex items-center">
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
