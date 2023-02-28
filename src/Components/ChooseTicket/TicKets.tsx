import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { TicketCombo } from './TicketsCombo';

const TicKets = () => {
  const [num, setNum] = useState([0, 0, 0])
  const [total, setTotal] = useState(0);
  const { booking } = useSelector((state: any) => state.BookingRdc);
  const { SetCostTicket } = useContext(TicketCombo) as any;

  useEffect(() => {
    if (booking?.ticket) {
      const sum = num.reduce((sum, n, i) => sum + n * booking.ticket[i].displayPrice, 0);
      setTotal(sum);
      SetCostTicket(sum)
    }
  }, [num, booking, SetCostTicket])


  const ButtonChange = (type: string, index: number) => {
    if (type === 'next') {
      setNum(num.map((n, i) => i === index ? n + 1 : n));
    }
    else if (type === 'prev') {
      setNum(num.map((n, i) => i === index ? (n < 1 ? 0 : n - 1) : n))
    }
  }

  const HandleValue = (event: any, index: number) => {
    const value = parseInt(event.target.value);
    const Id: number = value - num[index];
    if (Id > 0) {
      setNum(num.map((n, i) => index === i ? value : n))  
    }
    else {
      setNum(num.map((n, i) => index === i ? 0 : n))
    }
  }

  return (
    <table className='chooseticket'>
      <thead>
        <tr>
          <th className='th1'>Loại vé</th>
          <th className='th2'>Số lượng</th>
          <th className='th2'>Giá(VND)</th>
          <th className='th2'>Tổng(VND)</th>
        </tr>
      </thead>
      <tbody>
        {
          booking?.ticket?.map((n: any, i: number) =>
            <tr key={i}>
              <td >
                <p>{n.name}</p>
                <small>{n.description}</small>
              </td>
              <td className='td1'>
                <div>
                  <button onClick={() => ButtonChange('prev', i)}>{'<<'}</button>
                  <input type='text' value={num[i]} onChange={(event) => HandleValue(event, i)} />
                  <button onClick={() => ButtonChange('next', i)}>{'>>'}</button>
                </div>
              </td>
              <td className='td'> {n.displayPrice}</td>
              <td className='td'>{n.displayPrice * num[i]}</td>
            </tr>
          )
        }
        <tr className='sum'>
          <td>
            Tổng
          </td>
          <td colSpan={2}></td>
          <td className='td'>
            {total}
          </td>
        </tr>
      </tbody>
    </table>
  )
}


export default TicKets