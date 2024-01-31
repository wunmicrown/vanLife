import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const Vandetails = () => {
  let { id } = useParams()
  const [data, setData] = useState([]);
  const url = 'http://localhost:5000/api/vans';

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data[id]);
      setData(response.data[id]);
    });
  }, [id]);


  return (
    <section>

      <div className="div">
        <h1>{data.type}</h1>
        <img src={data.imageUrl} alt="" />
        <h1>${data.price}</h1>
        <h1>{data.description}</h1>
      </div>
    </section>
  )
}

export default Vandetails