import React, { useEffect, useState } from 'react'
import './Showtime.scss'
import { iMovieID } from '../../../Model/iMovieID'
import { useNavigate } from 'react-router-dom'


export default function Showtime() {

    const nav = useNavigate()
    const [lsFilmShowing, setLsFilmShowing] = useState<Array<iMovieID>>([])
    const [lsFilmSoon, setLsFilmSoon] = useState<Array<iMovieID>>([])
    const [lsCinema, setCinema] = useState<Array<iMovieID>>([])
    const [lsShowTime, setShowtime] = useState<Array<iMovieID>>([])
    const [Id, SetId] = useState('')


    useEffect(() => {
        fetch('https://vietcpq.name.vn/U2FsdGVkX18T5PZyzy+DFinQeo1AmvEZ6gWQ2hDjTbo=/cinema/nowAndSoon')
            .then(res => res.json())
            .then(data => {
                setLsFilmShowing(data.movieShowing);
                setLsFilmSoon(data.movieCommingSoon);
            })
    }, [])



    const optionRap = async (id: string) => {
        let res = await fetch(`https://vietcpq.name.vn/U2FsdGVkX19OPhHMXw1V9CXSBEQUK+Pcc8fSVohfF7Y=/cinema/movie/${id}`);
        let data = await res.json();
        setCinema(data);
        SetId(id);
    }

    const optionSet = async (i: any) => {
        let res = await fetch(`https://vietcpq.name.vn/U2FsdGVkX19OPhHMXw1V9CXSBEQUK+Pcc8fSVohfF7Y=/cinema/movie/${Id}`);
        let data = await res.json();
        setShowtime(data[i].dates);
    }

    const ShowBooking = () => {
        nav('/Films/' + Id + '/Detail/' + Id)
    }

    return (
        <div>
            <div className='showTimes mainSize'>
                <div className='optionMovie'>
                    <h4 className='tx'>Chọn Phim</h4>
                    <ul className='itemMovie'>
                        {
                            lsFilmShowing.map((n, i) => {
                                return <li key={i} className='tx' onClick={() => optionRap(n.id)}>
                                    <div className='leftItem'>
                                        <img className='img-cover' width={60} height={40} src={n.imageLandscape} alt="" />
                                        <div className='detailName'>
                                            <p>{n.name}</p>
                                            <p className='subN'>{n.subName}</p>
                                        </div>
                                    </div>
                                    <p>+</p>
                                </li>
                            })
                        }
                        {
                            lsFilmSoon.map((n, i) => {
                                return <li key={i} className='tx' onClick={() => optionRap(n.id)}>
                                    <div className='leftItem'>
                                        <img className='img-cover' width={60} height={40} src={n.imageLandscape} alt="" />
                                        <div className='detailName'>
                                            <p>{n.name}</p>
                                            <p className='subN'>{n.subName}</p>
                                        </div>
                                    </div>
                                    <p>+</p>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className='optionMovie'>
                    <h4 className='tx'>Chọn Rạp</h4>
                    <ul className='itemCnm'>
                        {lsCinema.map((n, i) => {
                            return <li key={i} onClick={() => optionSet(i)}>
                                {n.name}
                            </li>
                        })}
                    </ul>

                </div>

                <div className='optionSet'>
                    <h4 className='tx'>Chọn Xuất</h4>
                    <ul>
                        {lsShowTime.map((n, i) => {
                            return <li key={i}>
                                <div className='detail'>
                                <h4>{n.showDate}</h4>
                                <div className='boxDate'>
                                            {
                                                n.bundles.map((b: any) => {
                                                    return <div className='detailBox'>
                                                        <h5>Ticket {b.version}</h5>
                                                        <div className='infoBox'>
                                                            {
                                                                b.sessions.map((t: any) => {
                                                                    return <span onClick={ShowBooking}>
                                                                        {t.showTime}
                                                                    </span>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                </div>
                            </li>
                        })}

                    </ul>
                </div>
            </div>


        </div>
    )
}
