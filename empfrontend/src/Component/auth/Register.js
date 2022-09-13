import React,{useState} from 'react'

 const Register = () => {
     const [name, setName] =useState('')
     const [email, setEmail] =useState('')
     const [password, setPassword] =useState('')
     const [phone, setPhone] =useState('')

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Register here</h3>
            <p>Please enter your details to register.</p>
          </div>
        </div>
        <form className="login-form">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
          <input type="text" placeholder="username" value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type="text" placeholder="phone number" value={phone} onChange={e=>setPhone(e.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          <input type="password" value={password} placeholder="confirm password" onChange={e=>setPassword(e.target.value)}/>
          <button>Register</button>
          <p className="message">already account? <a href="#">Login now</a></p>
        </form>
      </div>
    </div>
  )
}

export default Register