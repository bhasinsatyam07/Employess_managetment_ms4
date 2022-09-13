import React,{useState} from 'react'
import '../auth/login.css'

 const Login = () => {
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="username" value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="password"value={password} onChange={e=>setPassword(e.target.value)}/>
          <button>login</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>

  )
}

export default Login