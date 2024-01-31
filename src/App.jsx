import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import LandingPage from './Component/LandingPage'
import About from './pages/About'
import'./App.css'
import VanPage from './pages/VanPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About/>} />
          <Route path='/van' element={<VanPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App