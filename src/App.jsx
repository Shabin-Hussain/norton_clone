import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path={'/'} element={<Landingpage/>}/>
      <Route path={'/home'} element={<Home/>}/>
    </Routes>
     
    </>
  )
}

export default App
