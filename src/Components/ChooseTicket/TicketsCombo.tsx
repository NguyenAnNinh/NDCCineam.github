import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Combo from './Combo';
import TicKets from './TicKets';
import { useParams } from 'react-router-dom';
import { iMovies } from '../Model/iMovies';
import ChooseChair from '../ChooseChair/ChooseChair';
import './ChooseTicket.scss'


export const TicketCombo = createContext({})
export const useTicketCombo = () => useContext(TicketCombo);

function TicketsCombo() {
    const { id } = useParams()
    const [CostTicket, SetCostTicket] = useState<number>(0);
    const [CostCombo, SetCostCombo] = useState<number>(0);
    const [Show, SetShow] = useState(false);
    const [Film, SetFilm] = useState<iMovies>()
    const [SeatCode, SetSeatCode] = useState([]);

    const common = {
        CostTicket, SetCostTicket,
        CostCombo, SetCostCombo,
        SeatCode,SetSeatCode,
        Film
    }


    useEffect(() => {
        fetch("https://teachingserver.onrender.com/cinema/nowAndSoon")
            .then(res => res.json())
            .then(data => {
                SetFilm(
                    [
                        ...data.movieShowing.filter((n: any) => n.id === id),
                        ...data.movieCommingSoon.filter((n: any) => n.id === id)
                    ][0]
                );
            })
    }, [id])


    const dispatch = useDispatch();
    useEffect(() => { dispatch({ type: 'GET_BOOKING_TICKET' }) }, [dispatch]);

    return (
        Film ? <TicketCombo.Provider value={common}>
            <div className='mainsizedetail'>
                <div className='sideleft'>
                    <div className='ticketandcombo'>
                        <h1>CHỌN VÉ / CHỌN COMBO</h1>
                        <TicKets />
                        <Combo />
                    </div>
                </div>
                <div className='sideright'>
                    <img width={350} height={234} src={Film.imageLandscape} />
                    <h3>{Film.name}</h3>
                    <small><i>Dành cho khách hàng {Film.age}+ trở lên</i></small>
                    <h4>{Film.subName}</h4>
                    <p><b>Thời Lượng: {Film.duration} Phút</b></p>
                    <p>--------</p>
                    <p>Ghế: {SeatCode}</p>
                    <p className='sum'>Tổng Giá: {CostTicket + CostCombo} $</p>

                    <div className='btn'>
                        <button onClick={() => SetShow(true)} >Choose Chair {">>"}</button>
                    </div>
                </div>
                {Show && <ChooseChair cancel={SetShow} />}
            </div>
        </TicketCombo.Provider > : <></>
    )
}

export default TicketsCombo