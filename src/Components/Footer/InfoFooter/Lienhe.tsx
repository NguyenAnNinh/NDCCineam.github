import React from 'react'


export default function Lienhe() {
  return (
    <div className='contact'>
      <div className='img-contact'></div>
      <div className='content-contact'>
        <div className='mainsize'>
          <div className='side-left'>
            <div className='form-button'>
              <a href='lienhe'>Liên Hệ</a>
              <a href='tuyendung'>Tuyển Dụng</a>
              <a href='cauhoithuonggap'>Hỏi Đáp</a>
            </div>
            <div className='content-side-left'>
              <div className='lienhe'>
                <p>Các mục đánh dấu (*) là bắt buộc</p>
                <input className='w-100' type='text' placeholder='Họ và Tên*' />
                <input className='w-50' type='email' placeholder='Email*' />
                <input className='w-50' type='text' placeholder='Số điện thoại*' />
                <input className='w-100' type='text' placeholder='Tiêu đề*' />
                <textarea placeholder='Nội dung'></textarea>
                <p>File đính kèm (pdf,word,excel)
                  <small>File đính kèm phải là file pdf,word,excel có nội dung nhỏ hơn 5Mb!</small>
                </p>
                <input type='file' placeholder='Choose File' />
                <button>Gửi Thư</button>
              </div>
            </div>
          </div>
          <div className='side-right'>
            <h1>Thông Tin Liên Hệ</h1>
            <h2>NDCCINEMA</h2>
            <p>Hải Phòng City</p>
            <p>Diện thoại: 0925566103/0356729138</p>
            <p>Email: contact@ndccinema.com</p>
            <p>Website: <a href='https://ndccinema.com'>https://ndccinema.com</a></p>
            <a href=''>Chỉ Đường {'>>'}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
