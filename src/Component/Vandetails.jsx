import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Vandetails = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const url = 'http://localhost:5000/api/vans';

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data[id]);
    });
  }, [id]);

  return (
    <section>
      <div className="container mx-auto">
      <Link to='/vans'><p className=" underline text-base font-bold mx-10 mb-8 mt-4">Back to all vans</p></Link>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <img src={data.imageUrl} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 px-4 ">
          <button className="bg-[#E17654] text-white font-semibold p-3 rounded mt-8">Simple</button>
            <h1 className="text-lg font-semibold mt-4">{data.name}</h1>
            <h2 className="text-lg font-semibold mt-4"><span className=" font-medium">${data.price}</span>/day</h2>
            <p className=" max-md:mb-10 mt-4 font-bold mb-5">{data.description}</p>
          <button className="bg-[#FF8C38] w-full text-white mb-20 p-2 text-center font-bold text-[18px] rounded ">Rent this van</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Vandetails;
