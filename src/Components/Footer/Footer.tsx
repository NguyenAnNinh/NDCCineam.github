import React, { useState } from 'react'
import './Footer.scss'
import Dangkinhantin from './InfoFooter/Dangkinhantin';

export default function Footer() {
    const [Show, SetShow] = useState(true);
    return (
        <div className='footer'>
            <div className='mainsize form-footer'>
                <div className='footer-content'>
                    <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                    <p><b>Hotline:</b>0925566103/0356729138</p>
                    <p><b>Giờ làm việc:</b> 8h00-22h00 tất cả các ngày trong tuần</p>
                    <p><b>Email:</b> contact@ndccinema.com</p>
                </div>
                <div className='footer-content'>
                    <h1>KẾT NỐI VỚI CHÚNG TÔI</h1>
                    <div>
                        <a href='a'><img src={require('../../Image/Footer/icon-fb.png')} alt='img'/></a>
                        <a href='a'><img src={require('../../Image/Footer/icon-ytb.png')} alt='img'/></a>
                    </div>
                    <h1>ỨNG DỤNG</h1>
                    <div>
                    <a href='a'><img src={require('../../Image/Footer/app-ios.png')} alt='img'/></a>
                    <a href='a'><img src={require('../../Image/Footer/app-android.png')} alt='img'/></a>
                    </div>
                    <p><b>Phiên bản Mobile</b></p>
                </div>
                <div className='footer-content side3'>
                    <a href='dieukhoanchung'><p>Điều Khoản Chung</p></a>
                    <a href='cauhoithuonggap'><p>Câu Hỏi Thường Gặp</p></a>
                    <a href='dieukhoangiaodich'><p>Điều Khoản Giao Dịch</p></a>
                    <a href='huongdandatveonline'><p>Hướng Dẫn Đặt Vé Online</p></a>
                    <a href='chinhsachthanhtoan'><p>Chính Sách Thanh Toán</p></a>
                    <a href='lienhe'><p>Liên Hệ</p></a>
                    <a href='chinhsachbaomatthongtin'><p>Chính Sách Bảo Mật thông tin</p></a>
                    <a href='tuyendung'><p>Tuyển Dụng</p></a>
                    <a className='nhantin' onClick={()=> SetShow(!Show)}><p><img src={require('../../Image/Footer/icon-email.png')} alt='img'/><span>ĐĂNG KÍ NHẬN TIN</span></p></a>
                    <a href='a'><img src={require('../../Image/Footer/dathongbao.png')} alt='img'/></a>
                    {!Show && <Dangkinhantin/>}
                </div>
            </div>
            <div className='footer-bottom'>
                    <img src={require('../../Image/Footer/partner-2.png')} alt='img'/>
                    <img src={require('../../Image/Footer/partner-3.png')} alt='img'/>
            </div>
            <div className='mainsize'>
                <h2>©2022 NDCCINEMA</h2>
            </div>
        </div>
    )
}
