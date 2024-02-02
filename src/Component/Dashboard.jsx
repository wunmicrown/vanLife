import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const URL = 'http://localhost:5000/api/vans';

  useEffect(() => {
    axios.get(URL).then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const displayedData = showAll ? data : data.slice(0, 3);
  const viewButtonText = showAll ? "View Less" : "View All";

  return (
    <>
      <main className="bg-[#FFF7ED]">
        <section className="bg-[#FFEAD0]">
          <h1 className="text-start font-bold text-2xl ml-10">Welcome!</h1>
          <div className="flex justify-between mx-10">
            <p className="pt-10 text-lg">Income last 30 days </p>
            <Link><p className="pt-10 text-lg">Details</p></Link>
          </div>
          <h1 className="text-start font-extrabold text-3xl ml-10 pt-10">$2,260</h1>
        </section>
        <div className="bg-[#FFDDB2]">
          <div className="mx-10 flex justify-between">
            <span className="flex gap-6">
              <p className="pt-10 text-lg font-bold">Review score</p>
              <p className="pt-10 text-lg">⭐<span className="font-bold">5.0</span>/5</p>
            </span>
            <p className="pt-10 text-lg"><Link>Details</Link></p>
          </div>
        </div>
        <section>
          <div className="flex mx-12 pt-10 justify-between">
            <p className="font-bold text-xl lg:text-[24px] leading-10 sm:text-xl">Your listed vans</p>
            <p className="text-base font-medium leading-10">
              <button onClick={() => setShowAll(!showAll)}>{viewButtonText}</button>
            </p>
          </div>
          <div>
            {displayedData.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between rounded p-5 mb-4">
                <img src={item.imageUrl} alt={item.name} className="w-full md:w-44 mb-2 md:mb-0" />
                <div className="flex flex-col md:flex-col sm:flex-row items-center sm:items-start ml-2">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}/day</p>
                </div>
                <button className="mt-2 hidden sm:block">Edit</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
