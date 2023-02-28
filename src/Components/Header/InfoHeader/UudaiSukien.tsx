import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa';
import Booking from '../../Booking/Booking';
import './InfoHeader.scss'

interface RootObject {
    name: string;
    description: string;
    shortDescription: string;
    views: number;
    startdate?: Date;
    enddate?: Date;
    imageLandscape: string;
    imagePortrait: string;
    imageLandscapeMobile: string;
    point: number;
    totalVotes: number;
    metadata: any[];
}

export default function UudaiSukien() {
    const [Events, setEvents] = useState<Array<RootObject>>([]);
    const [CardEvt, setCardEvt] = useState(8);

    const showMoreItems = () => {
        setCardEvt((value) => value + 8)
    }

    useEffect(() => {
        fetch('https://teachingserver.onrender.com/cinema/moreInfo/')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [])
    return (
        <div className='uudaisukien'>
            <div className='side-left'>
                <h1>ƯU ĐÃI - SỰ KIỆN</h1>
                <div className='content-event'>
                    {
                        Events.slice(0, CardEvt).map((n) => {
                            return <div className='card-event'>
                                <img width={335} height={335} src={n?.imagePortrait} alt='img' />
                                <div className='card-event-content'>
                                    <div><FaEye /> <span>{n.views}</span></div>
                                    <h2>{n.name}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: n.shortDescription }}></p>
                                </div>
                            </div>
                        })
                    }
                    <div className='more'>
                        <button onClick={showMoreItems} className='more'>{"<<<"} Xem Thêm {">>>"}</button>
                    </div>
                </div>
            </div>
            <div className='side-right'>
                <Booking />
            </div>
        </div >
    )
}
