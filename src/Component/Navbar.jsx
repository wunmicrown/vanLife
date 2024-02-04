import { Link, useLocation } from "react-router-dom"
import logo from "../assets/vanlife.svg"

const Navbar = () => {
  const { pathname } = useLocation();
  const isActive = pathname === "/about";
  const isActiveVans = pathname === "/vans";

  return (
    <nav className="flex bg-[#FFF7ED] shadow-lg justify-between p-10 sticky top-0">
      <div>
        <Link to="/home">
        <img src={logo} alt="" srcset="" width={100}/>
        </Link>
      </div>
      <div className="flex gap-5">
      <Link to="/host">
          <div className={isActiveVans ? "border-b-2 border-black w-full" : ""}>
          Host
          </div>
          </Link>
        <Link to="/about">
          <div className={isActive ? "border-b-2 border-black w-full" : ""}>
          About
          </div>
          </Link>
        <Link to="/vans">
          <div className={isActiveVans ? "border-b-2 border-black w-full" : ""}>
          Vans
          </div>
          </Link>
        {/* <Link to="/signup">
          <div className={isActiveVans ? "border-b-2 border-black w-full" : ""}>
          Signup
          </div>
          </Link> */}
       
      </div>
    </nav>
  )
}

export default Navbar