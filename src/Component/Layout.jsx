import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return(
    <main>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
      <Footer/>
    </main>
    );
    
};

export default Layout;
