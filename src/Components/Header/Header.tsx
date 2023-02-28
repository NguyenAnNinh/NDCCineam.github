import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Account from '../Account/Account';
import Booking from '../Booking/Booking';
import './Header.scss'
// import './Header.css';


export default function Header() {
    const [ShowBk, SetShowBk] = useState(true);
    const [ShowAcc, SetShowAcc] = useState(true);
    const [Cookier, SetCookier, removeCookie] = useCookies(['Account']);
    
   const signout = () => {
   removeCookie('Account')
   }
   
    return (
        <div className='Header tx'>
            <div className='mainSize navBar'>
                <div className='containerHearder'>
                    <div className='logo'>
                       <a href='/'> <img width={100} height={100} src={require('../../Image/logo.png')} alt="" /></a>
                    </div>
                    <div className='menuInfo'>
                        <div className='buttonTop'>
                            <div className='row'>
                                <div className='buttonRow'>
                                    <a className='buyTicket' onClick={() => SetShowBk(!ShowBk)}>
                                        <img src={require('../../Image/dat-ve-ngay.png')} alt="" />
                                    </a>
                                    <div className='tagMiddle'>
                                        <form action="">
                                            <div className='input-menu'>
                                                <input type="text" placeholder='Tìm kiếm' />
                                            </div>
                                        </form>
                                        <a className='language' href="#"><img width={36} height={36} src={require('../../Image/vn.png')} alt="" /></a>
                                    </div>
                                    <div className='account'>
                                        <a className='icFace' href="#">
                                            <img src={require('../../Image/icon-fb.png')} alt="" />
                                        </a>
                                        <a className='icYtb' href="#">
                                            <img src={require('../../Image/icon-ytb.png')} alt="" />
                                        </a>
                                        <a className='login' onClick={() => SetShowAcc(!ShowAcc)} href="#Login"> <img src={require('../../Image/dang-nhap.png')} alt="Đăng nhập" />
                                           {Cookier.Account && ( <span className='span'>{Cookier.Account}</span>) || (<span className='span'>Đăng nhập</span>)}
                                        </a>
                                        <button className='btnsignout' onClick={signout}>Signout</button>
                                    </div>
                                </div>
                            </div>
                            <div className='navbav'>
                                <ul className='nav'>
                                    <li><a className='start-home' href="/">Trang chủ</a></li>
                                    <li><a className='start-movie' href="/Film">Phim</a></li>
                                    <li><a className='start-showtime' href="/Showtime">Lịch chiếu</a></li>
                                    <li><a href="/thanhvien">Thành viên</a></li>
                                    <li><a href="/uudaisukien">Ưu đãi - Sự kiện</a></li>
                                    <li><a href="danhgiaphim">Đánh giá phim</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {!ShowAcc && <Account />}
            {!ShowBk && <Booking />}
        </div >

    )
}
