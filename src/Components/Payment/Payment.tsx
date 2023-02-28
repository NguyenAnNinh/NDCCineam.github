import React, { useContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import '../ChooseChair/ChooseChair.scss'
import { TicketCombo } from '../ChooseTicket/TicketsCombo';


function Payment({ Return }: any) {


  const nav = useNavigate()
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [cardid, setcardid] = useState('');
  const [cardname, setcardname] = useState('');
  const [Infoemail, setInFoemail] = useState('');
  const [Infophone, setInFophone] = useState('');
  const [Infocardid, setInFocardid] = useState('');
  const [Infocardname, setInFocardname] = useState('');
  const { CostTicket, CostCombo, SeatCode, Film } = useContext(TicketCombo) as any;


  const EveryInfo = {
    Email: Infoemail,
    Phone: Infophone,
    NameFilm: Film.name,
    Age: Film.age,
    BankId: Infocardid,
    BankName: Infocardname,
    Ghế: SeatCode,
    Total: CostTicket + CostCombo,
  }




  const CheckEmail = ((value: string) => {
    setInFoemail(value)
    if (/^\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/.test(value) === false) {
      return setemail('Email phải có @gmail.com')
    } else {
      return setemail('')
    }
  })

  const CheckPhone = ((value: string) => {
    setInFophone(value)
    if (/^\d{10,12}$/.test(value) === false) {
      return setphone('Số điện thoại phải có 10 đến 12 số')
    } else {
      return setphone('')
    }
  })

  const CheckCardId = ((value: string) => {
    setInFocardid(value)
    if (/^\d{10,13}$/.test(value) === false) {
      return setcardid('Số thẻ phải có từ 10 đến 13 số')
    } else {
      return setcardid('')
    }
  })

  const CheckCardName = ((value: string) => {
    setInFocardname(value)
    if (/^[A-Za-z ]+$/.test(value) === false) {
      return setcardname('Chủ thẻ ghi rõ họ tên')
    } else {
      return setcardname('')
    }
  })


  const HandlePayment = () => {
    console.log(EveryInfo);
    const InfoPayment = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: Infoemail,
        Phone: Infophone,
        NameFilm: Film.name,
        Age: Film.age,
        BankId: Infocardid,
        BankName: Infocardname,
        Ghế: SeatCode,
        Total: CostTicket + CostCombo,
      }),
    };
    fetch("https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/Ticket",
      InfoPayment
    ).then((response) => {
      if (response.status === 200) {
        nav("/Success");
      }
    });
    alert('Thanh toán thành công');
    nav("/Success")
  };


  return (
    <div className='payment'>
      <h1>Thanh Toán</h1>
      <div className='formbank'>
        <div className='formbank-header'>
          <div className='form-input w50'>
            <label>Email</label>
            <input type='email' onChange={(event) => CheckEmail(event.target.value)} />
            <span>
              {email}
            </span>
          </div>
          <div className='form-input w50'>
            <label>Số điện thoại</label>
            <input type='text' onChange={(event) => CheckPhone(event.target.value)} />
            <span>
              {phone}
            </span>
          </div>
        </div>
        <div className='cardbank'>
          <div className='header-card'>
            <img width={65} src='https://seeklogo.com/images/A/agribank-2014-logo-D607F59D1E-seeklogo.com.png' alt='bank' />
            <h1>Agribank</h1>
          </div>
          <div className='form-input'>
            <label>Số Tài Khoản</label>
            <input type='text' onChange={(event) => CheckCardId(event.target.value)} />
            <span>
              {cardid}
            </span>
          </div>
          <div className='form-input'>
            <label>Chủ tài khoản</label>
            <input type='text' onChange={(event) => CheckCardName(event.target.value)} />
            <span>
              {cardname}
            </span>
          </div>

        </div>
        <small>**Click để thanh toán và trải nghiệm dịch vụ của chúng tôi</small>
      </div>
      <div className='btn'>
        <button onClick={() => Return(false)} >Back</button>
        <button onClick={HandlePayment}>Thanh Toán</button>
      </div>

    </div>
  )
}

export default Payment