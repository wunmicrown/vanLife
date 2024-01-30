import { Route, Routes } from 'react-router-dom'
import Layout from './Component/layout/Layout'
import LandingPage from './Component/landingPage/LandingPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<LandingPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App