import React, { useEffect, useState } from 'react'
import { iMovieID } from '../Model/iMovieID';
import './Booking.scss'



export default function Booking() {
    const [Film, SetFilm] = useState([]);
    const [Cinema, SetCinema] = useState([]);
    const [Day, SetDay] = useState([]);
    const [Time, SetTime] = useState<Array<iMovieID>>([])
    const [Id, SetId] = useState('');
    


    useEffect(() => {
        fetch("https://teachingserver.onrender.com/cinema/nowAndSoon")
            .then(res => res.json())
            .then(data => {
                SetFilm(data.movieShowing);
            })
    }, [])


    const GetDataCinema = async (id: any) => {
        let res = await fetch(`https://teachingserver.onrender.com/cinema/movie/${id}`);
        let data = await res.json();
        SetCinema(data);
        SetId(id)
    }

    
const GetDataDay = ((event : any) => {
    fetch(`https://teachingserver.onrender.com/cinema/movie/${Id}`)
    .then(res => res.json())
    .then(data => SetDay(data[event].dates) )
})

// const GetDataTime = ((event:any)=> {
//     SetTime(Day[event])
// })



    return (
        <div className='booking'>
            <h1><img src={require('./icon-ticket.png')} alt='img' /><span>ĐẶT VÉ</span></h1>
            <select onChange={(event) => GetDataCinema(event.target.value)}>
                <option><span>icon</span> Chọn Phim</option>
                {
                    Film.map((n: any, i: any) => {
                        return <option value={n.id} key={i}>{n.name}</option>
                    })
                }
            </select>
            <select onChange={(event) => GetDataDay(event.target.value)} >
                <option><span>icon</span> Chọn Rạp</option>
                {
                    Cinema.map((n: any, i: any) => {
                        return <option value={i} key={i}>{n.name}</option>
                    })
                }
            </select>
            <select 
            // onChange={(event) => GetDataTime(event.target.value)}
            >
                <option><span>icon</span> Chọn Ngày</option>
                {
                    Day.map((n: any, i: any) => {
                        return <option value={i} >{n.showDate}</option>
                    })
                }
            </select>
            {/* <select>
                <option><span>icon</span> Chọn Suất</option>
                {
                    Time.bundles.sessions.map((n: any) => {
                        return <option>{n.showTime}</option>
                    })
                }
            </select> */}
            <button>MUA VÉ</button>
        </div>
    )

}