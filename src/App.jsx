import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout"
import Home from "./Component/Home"
import About from "./Component/About"
import Van from "./Component/Van"
import Vandetails from "./Component/Vandetails"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/api/vans/:id" element={<Vandetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
