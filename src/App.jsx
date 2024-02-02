import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Van from "./Component/Van";
import Vandetails from "./Component/Vandetails";
import Host from "./Component/Host";
import Dashboard from "./Component/Dashboard";
import IncomePage from "./Component/IncomePage";
import VanDash from "./VanDash";
import ReviewDash from "./ReviewDash";
import Signup from "./Component/authentication/Signup";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van/>} />
          <Route path="/api/vans/:id" element={<Vandetails/>} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/" element={<Host/>}>
          <Route path="/host" element={<Dashboard/>}/>
          <Route path="/host/income" element={<IncomePage/>}/>
          <Route path="/host/vans" element={<VanDash/>}/>
          <Route path="/host/reviews" element={<ReviewDash/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
