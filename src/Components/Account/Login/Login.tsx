import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

export default function Login() {
  const [Account, SetAccount] = useState('');
  const [Password, SetPassword] = useState('');
   const [cookies, setCookie, removeCookie ] = useCookies(['Account']);

  const HandleLogin = () => {
    
    let data = JSON.parse(localStorage.getItem(Account) || '{}');
    
    if (data == null) {
      alert('Vui long nhap lai tai khoan')
    } else if (Account == data.account && Password == data.password) {
      setCookie('Account', Account, { path: '/' });
      alert('Dang nhap thanh cong')
      window.location.href = "/"
    } else {
      alert('Dang nhap that bai')
    }
  }



  const Return = () => {
    return false
  }

  return (
    <div >
      <h2>Login</h2>
      <form onSubmit={Return}>
        <div className="user-box">
          <input type="text" onChange={(event) => SetAccount(event.target.value)} />
          <label>Account</label>
        </div>
        <div className="user-box">
          <input type="password" onChange={(event) => SetPassword(event.target.value)} />
          <label>Password</label>
        </div>
        <a href="#" onClick={HandleLogin}>
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
