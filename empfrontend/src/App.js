import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Component/homeelements/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/auth/Login'
import Register from './Component/auth/Register'
import Employees from './Component/Admin/Employees'
import Billmanagement from './Component/Admin/Billmanagement'

 const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path ="/" exact element={<Home/>}/>
            <Route path ="/login"  element={<Login/>}/>
            <Route path ="/register"  element={<Register/>}/>
            <Route path ="/bill"  element={<Billmanagement/>}/>
            <Route path ="/employess"  element={<Employees/>}/>
        </Routes>
    </Router>
  )
}

export default App