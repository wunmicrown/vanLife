import { Routes } from 'react-router-dom'
import Layout from './Component/layout/Layout'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
      <Routes>
        <Routes path="/" element={<Layout/>}>
         
        </Routes>
      </Routes>
    </>
  )
}

export default App