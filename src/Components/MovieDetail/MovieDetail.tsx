import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { iMovies } from '../Model/iMovies'
import { iMovieID } from '../Model/iMovieID';
import { DateArg } from '../Weapons/Date'
import './MovieDetail.scss'


export default function MovieDetail() {
    const { id } = useParams()
    const [film, SetFilm] = useState<iMovies>()
    const [Cinema, SetCinema] = useState<Array<iMovieID>>([])
    const nav = useNavigate();

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

        fetch("https://teachingserver.onrender.com/cinema/movie/" + id)
            .then(res => res.json())
            .then(data => SetCinema(data))
    }, [id])
    console.log(film);

    const ShowBooking = (i1: any,i2:any,i3:any,i4:any) => {
        nav('/Films/' + id + '/Detail/' + id)
    }

    return (
        film ? <div className='infoMovie'>

            <div className='trailer'>
                <img src={film.imageLandscape} alt="Cuong" />
            </div>
            <div className='film'>
                <div className='imgFilm'>
                    <img width={300} height={450} src={film.imagePortrait} alt='Cuong' />
                </div>
                <div className='infoFilm'>
                    <div className='detail-top'>
                        <h2>{film.subName}</h2>
                        <h3 className='tx'>{film.name}</h3>
                    </div>
                    <div className='detail-bt'>
                        <p>Thời Lượng: <span>{film.duration} Phút</span></p>
                        <p>Khởi chiếu từ: <span>{DateArg(film.startdate)}</span></p>
                        <p>Thể loại: <span>Hành Động, Phiêu Lưu</span></p>
                        <p>Định dạng: <span>2D</span></p>
                        <p>Đạo Diễn: <span>Peyton Reed</span></p>
                        <p>Diễn Viên: <span>Paul Rudd, Evangeline Lilly, Jonathan Majors</span></p>
                        <p>Độ tuổi: <span>{film.age}</span></p>
                    </div>

                </div>
            </div>
            <div className='content'>
                {
                    Cinema.map((n, i1: any) => {
                        return <div key={i1} className='cinema'>
                            <h3>Cinema: {n.vistaName}</h3>
                            {
                                n.dates?.map((d: any, i2: any) => {
                                    return <div key={i2} className="CardDay">
                                        <h4>- {d.showDate}</h4>
                                        <div className='boxDate'>
                                            {
                                                d.bundles.map((b: any, i3: any) => {
                                                    return <div className='detailBox'>
                                                        <h5>Ticket {b.version}</h5>
                                                        <div className='infoBox'>
                                                            {
                                                                b.sessions.map((t: any, i4: any) => {
                                                                    return <span onClick={() => ShowBooking(i1,i2,i3,i4)}>
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
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div> : <></>
    )



}