import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Three60 from './components/Three60'

function App() {


  return (
    <>
    <Routes>
      <Route path={'/'} element={<Landingpage/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/three'} element={<Three60/>}/>
    </Routes>
     
    </>
  )
}

export default App
