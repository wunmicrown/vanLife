import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import LandingPage from './Component/LandingPage'
import About from './pages/About'
import Van from './pages/Van'
import'./App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About/>} />
          <Route path='/van' element={<Van/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App