import React from 'react'
import "./submitForm.css";

const SubmitForm = ({
    name , setName , number , setMobile , mail , setMail , handleSubmit
}) => {

    
  return (
    <div className="submit">
    <span className="submitTitle">React Js Submit Form</span>
    <form className="submitForm">
    <label>User Name</label>
      <input className="submitInput" type="text" placeholder="name..." name='name' value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Mobile</label>
      <input className="submitInput" type="text" placeholder="Mobile number ..." name='number' value={number} onChange={(e) => setMobile(e.target.value)}/>
      <label>Email</label>
      <input className="submitInput" type="mail" placeholder="email..." name='mail' value={mail} onChange={(e) => setMail(e.target.value)}/>
      <button className="submitRegisterButton" onClick={handleSubmit}>Register</button>
    </form>
  </div>
  )
}

export default SubmitForm