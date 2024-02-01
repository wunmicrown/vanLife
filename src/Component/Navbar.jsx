import { Link, useLocation } from "react-router-dom"
import logo from "../assets/vanlife.svg"

const Navbar = () => {
  const { pathname } = useLocation();
  const isActive = pathname === "/about";
  const isActiveVans = pathname === "/vans";

  return (
    <nav className="flex bg-gray-100 shadow-lg justify-between p-10 sticky top-0">
      <div>
        <Link to="/">
        <img src={logo} alt="" srcset="" width={100}/>
        </Link>
      </div>
      <div className="flex gap-5">
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
      </div>
    </nav>
  )
}

export default Navbar