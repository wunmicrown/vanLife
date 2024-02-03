import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Van from "./Component/Van";
import Vandetails from "./Component/Vandetails";
import Host from "./Component/Host";
import Dashboard from "./Component/Dashboard";
import IncomePage from "./Component/IncomePage";
import VanDash from "./Component/VanDash";
import ReviewDash from "./Component/ReviewDash";
import Signup from "./Component/authentication/Signup";
import VanDashAll from "./Component/VanDashAll";
import'./App.css'
import Login from "./Component/authentication/Login";



const App=()=> {
  return (
    <>
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />

          <Route path="/" element={<Host />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<IncomePage />} />
            <Route path="/host/vans" element={<VanDash />} />
            <Route path="/host/reviews" element={<ReviewDash />} />
            <Route path="/host/reviews" element={<ReviewDash />} />
            <Route path="/host/reviews" element={<ReviewDash />} />
            <Route path="/host/vans/:id" element={<VanDashAll />} >
          
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
