import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Component/homeelements/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/auth/Login'
import Register from './Component/auth/Register'

 const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path ="/" exact element={<Home/>}/>
            <Route path ="/login" exact element={<Login/>}/>
            <Route path ="/register" exact element={<Register/>}/>
        </Routes>
    </Router>
  )
}

export default App