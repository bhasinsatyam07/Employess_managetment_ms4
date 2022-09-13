import React from 'react'
import img1 from './home.png'
import '../homeelements/header.css'

 const Header = () => {
  return (
    <div>
      <img src= {img1} alt =""width="500px"/>
      <p className="left">It is said that the devil works hard. Everyone is mistaken. You put in more effort. We’re incredibly proud of you.</p>
     </div>
  )
}

export default Header