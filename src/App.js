import React from 'react'
import Login from './View/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './View/Register'
import LandingPage from './View/Landing'
import Password from './View/Password'
import Dashboard from './View/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        < Route path='/' element={<LandingPage/>}></Route>
        < Route path='/Login' element={<Login />}></Route>
        < Route path='/Register' element={<Register />}></Route>
        < Route path='/PasswordReset' element={<Password />}></Route>
        < Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter >
  )
}

export default App
