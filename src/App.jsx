import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import LandingPage from './Component/LandingPage'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/' element={<Footer/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App