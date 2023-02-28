import React, { useEffect, useState } from 'react'
import './Event.scss'
import { FaEye } from 'react-icons/fa'

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


export default function Event() {
    const [Events, setEvents] = useState<Array<RootObject>>([]);
    const [CardEvt, setCardEvt] = useState(8);

    const showMoreItems = () => {
        setCardEvt((value) => value + 4)
    }

    useEffect(() => {
        fetch('https://teachingserver.onrender.com/cinema/moreInfo/')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [])
    return (
        <div className='mainSize'>
            <h1>ƯU ĐÃI VÀ SỰ KIỆN</h1>
            <div className='row'>
                {
                    Events.slice(0, CardEvt).map((item, i) => {


                        return <div key={i} className='example-2 card'>
                            <div className='wrapper'>
                                <img className='imgPoster' src={item.imagePortrait} alt='ád' />

                                <div className='data'>
                                    <div className='content'>
                                        <div><FaEye /> <span>{item.views}</span></div>
                                        <h1 className='author'>{item.name}</h1>
                                        <div dangerouslySetInnerHTML={{ __html: item.shortDescription }}></div>
                                        <a href='#Nguyễn Đức Cường' className='button'>Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
            <div className='more'>
                <button onClick={showMoreItems}>Load More</button>
            </div>
        </div>
    )
}
