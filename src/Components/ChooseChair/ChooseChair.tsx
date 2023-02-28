import React, { useContext, useEffect, useState } from 'react'
import Payment from '../Payment/Payment';
import { useDispatch, useSelector } from 'react-redux';
import './ChooseChair.scss'
import { TicketCombo } from '../ChooseTicket/TicketsCombo';



function ChooseChair({ cancel }: any) {

    const BookingDetail = useSelector((state: any) => state.BookingRdc.booking)
    const [Show, SetShow] = useState(false);
    const [SeatString, SetSeatString] = useState<Array<string>>([]);
    const { SetSeatCode } = useContext(TicketCombo) as any


    
    const ShowSeat = ((name: any, seat: any) => {
        let newseatcode = name + seat + ', ';
        SetSeatString([...SeatString, newseatcode]);
        SetSeatCode([SeatString]);
    })



    const Cancel = () => {
        SetSeatCode('')
        SetSeatString([])
        cancel(false)
    }

    const dispatch = useDispatch();
    useEffect(() => { dispatch({ type: 'GET_BOOKING_TICKET' }) }, [dispatch]);

    return (
        <div className='seatMainSize'>
            {
                Show ? <Payment Return={SetShow} />
                    : <>
                        <h2>Chọn ghế</h2>
                        <div className='chooseseat'>
                            <div className='chooseseat_choose'>
                                <>
                                    {BookingDetail?.seatPlan?.seatLayoutData.areas[1].rows.map((n: any) => {
                                        return <div key={n.physicalName} className='seatscouple'>
                                            <p>{n.physicalName}</p>
                                            <div className='seatscouple_choose'>
                                                {
                                                    n.seats
                                                        .filter((s: any, i: number) => i % 2 === 0)
                                                        .map((s: any, i: number) =>
                                                            <span className='seats-couple' onClick={() => ShowSeat(n.physicalName, s.id)}>
                                                                <span key={i}> {s.id} </span>
                                                                <span key={i + 1}> {s.id * 1 + 1} </span>
                                                            </span>
                                                        )
                                                }
                                            </div>
                                            <p>{n.physicalName}</p>
                                        </div>
                                    })}
                                </>
                                <div className='seatstandard'>
                                    {
                                        BookingDetail?.seatPlan?.seatLayoutData.areas[0].rows.map((n: any, index: number) => {
                                            return !n.physicalName ? <div key={index} className='seats-row empty' />
                                                : <div key={index} className='seats-row'>
                                                    <p>{n.physicalName}</p>
                                                    <div className='seats'>
                                                        {
                                                            n.seats.map((m: any) =>
                                                                <span className='seats-stander' onClick={() => ShowSeat(n.physicalName, m.id)} >
                                                                    {m.id}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                    <p>{n.physicalName}</p>
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='info'>
                                <div className='television'>
                                    <h3>Màn hình</h3>
                                </div>
                                <div className='info_content'>
                                    <div>
                                        <div style={{ background: 'lightgrey' }} />
                                        <span>Ghế có thể chọn</span>
                                    </div>
                                    <div>
                                        <div style={{ background: 'pink' }}></div>
                                        <span>Ghế đã chọn</span>
                                    </div>
                                    <div>
                                        <div style={{ background: 'lightgreen' }}></div>
                                        <span>Ghế đang chọn</span>
                                    </div>
                                    <div>
                                        <div style={{ background: 'red' }}></div>
                                        <span>Ghế đã bán</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn'>
                            <button onClick={Cancel}>
                                Cancel
                            </button>
                            <button onClick={() => SetShow(true)}>
                                Accept
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}


export default ChooseChair;
