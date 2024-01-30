import { Link } from "react-router-dom"
import landing from "../assets/img-folder/layerbg.png"
import "../Component/landingPage.css"
const LandingPage = () => {
  return (
    <>
      <div className="landing" style={{backgroundImage:`url(${landing})`,  backgroundSize:"cover", backgroundPosition:"center"}}>
        <div className="text-center pt-36 mx-auto">
            <h1 className="vanContent text-xl md:text-4xl lg:text-5xl sm:text-1xl">You got the travel plans, we got the travel vans.</h1>
            <p className="vanDetails pt-10 ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button className="text-white mt-28 bg-[#FF8C38] flex-shrink-0 w-[494.333px] h-[ 49.832px] p-4">
              <Link to="/" className="text-center font-bold text-[15.946px]">Find your van</Link>
            </button>
        </div>
        
      </div>
    </>
  )
}

export default LandingPage