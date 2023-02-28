import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { TicketCombo } from './TicketsCombo';

function Combo() {
    const [num, setNum] = useState([0, 0, 0, 0])
    const [total, setTotal] = useState(0)
    const { booking } = useSelector((state: any) => state.BookingRdc);
    const { SetCostCombo} = useContext(TicketCombo) as any;

    const Changevalue = (type: string, index: number) => {
        if (type === 'next') {
            setNum(num.map((n, i) => i === index ? n + 1 : n));
        }
        else if (type === 'prev') {
            setNum(num.map((n, i) => i === index ? (n < 1 ? 0 : n - 1) : n));
        }
    }

    const handleChange = (event: any, index: number) => {
        const value = parseInt(event.target.value);
        const Id: number = value - num[index];
        if (Id > 0) {
            setNum(num.map((n, i) => i === index ? value : n))
        }
        else {
            setNum(num.map((n, i) => i === index ? 0 : n))
        }
    }


    useEffect(() => {
        if (booking?.consession && booking.consession[0].concessionItems) {
            const sum = num.reduce((sum, n, i) => sum + n * booking.consession[0].concessionItems[i].displayPrice, 0);
            setTotal(sum);
            SetCostCombo(sum);
        }
    }, [num, booking, SetCostCombo])

    return (

        <table className='choosecombo'>
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
                    booking?.consession
                    && booking.consession[0]?.concessionItems.map((n: any, i: number) => {
                        return <tr key={i}>
                            <td className='td1' >
                                <img width={130} src={n.imageUrl} />
                                <div>
                                    <p>{n.description}</p>
                                    <small>{n.extendedDescription}</small>
                                </div>
                            </td>
                            <td className='td2'>
                                <div>
                                    <button onClick={() => Changevalue('prev', i)}>{'<<'}</button>
                                    <input type='text' value={num[i]} onChange={(e) => handleChange(e, i)} />
                                    <button onClick={() => Changevalue('next', i)}>{'>>'}</button>
                                </div>
                            </td>
                            <td className='td'>
                                <p>{n.displayPrice}</p>
                            </td>

                            <td className='td'>
                                {n.displayPrice * num[i]}
                            </td>
                        </tr>
                    })
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


export default Combo;