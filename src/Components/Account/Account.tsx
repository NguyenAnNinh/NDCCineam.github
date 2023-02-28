import React, { useState } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import './Account.scss'

function Account() {
    const [Show, SetShow] = useState(true);

    return (
        <div className='Account'>
            <div className='form-button'>
                <button className='button1' onClick={() => SetShow(true)}>Đăng Nhập</button>
                <button className='button2' onClick={() => SetShow(false)}>Đăng Kí</button>
            </div>
            <div className="login-box">
                {Show && <Login />}
                {!Show && <Register />}
            </div>
        </div>
    )
}

export default Account
