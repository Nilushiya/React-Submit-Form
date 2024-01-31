import React from 'react'
import "./SubmitForm.css"

const SubmitForm = () => {
  return (
    <div className="submit">
    <span className="submitTitle">Login</span>
    <form className="submitForm">
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." />
      <button className="loginButton">Login</button>
    </form>
      <button className="loginRegisterButton"><Link style={{textDecoration: 'none',color:'inherit'}} to="/register">Register</Link></button>
  </div>
  )
}

export default SubmitForm