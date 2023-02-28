import React, { useState } from 'react'
import { useCookies } from 'react-cookie';


export default function Register() {
  const [Account, SetAccount] = useState('');
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [cookies, setCookie, removeCookie ] = useCookies(['Account']);
  
const HandleRegister = () => {
  setCookie('Account', Account, { path: '/' });
 
  var user = {  
  account: Account,
  email: Email,
  password: Password
 }
 var json = JSON.stringify(user)
 localStorage.setItem(Account,json);
 alert("Dang Ki Thanh Cong")
 window.location.href = "/"
}

const Return = () => {
  return false
}

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={Return}>
        <div className="user-box">
          <input type="text" onChange={(event)=> SetAccount(event.target.value)} />
          <label>Account</label>
        </div>
        <div className="user-box">
          <input type="email" onChange={(event)=> SetEmail(event.target.value)} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" onChange={(event)=> SetPassword(event.target.value)} />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="password" id='password' />
          <label>Reset Password</label>
        </div>
        <a href="#" onClick={HandleRegister} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}
