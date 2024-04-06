import { useState } from 'react'
import './App.css'
import NewNavbar from './Components/NewNavbar'
import CenterImage from './Components/CenterImage'
import LoginButton from './Components/LoginButton'
import BattalionsComponent from './Components/BattalionsComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Forces from './Components/Forces'
import BattalionManagement from './Components/BattalionsManagement'
import Batallion from './Components/Batallion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <BrowserRouter>
          <NewNavbar/>
          <Routes>
              <Route path='/' element={
                <>
                  <CenterImage/>
                </>
              }/>

              <Route path='/login' element={
                <>
                  <Login/>
                </>
              }/>

              <Route path='/forces' element={
                <>
                  <Forces/>
                </>
              }/>

              <Route path='/register' element={
                <>
                  <Register/>
                </>
              }/>

              <Route path='/batallion/:batallionId' element={
                <>
                  <Batallion/>
                </>
              }/>

          </Routes>
        
        </BrowserRouter>
    </>
    
  )
}

export default App
