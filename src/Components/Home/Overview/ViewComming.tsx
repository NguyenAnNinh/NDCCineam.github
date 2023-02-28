import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { iMovies } from '../../Model/iMovies';
import "./Styleview.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FilmComming() {
  const [Comming, setComming] = useState<Array<iMovies>>([])
  const navID = useNavigate()

  
  useEffect(() => {
    fetch("https://teachingserver.onrender.com/cinema/nowAndSoon")
      .then(res => res.json())
      .then(data => {
        setComming(data.movieCommingSoon);
      })
  }, [])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    const ShowFilm = (id: any) => {
      navID('/Films/' + id)
  }
  return (
    <div className='slidefilm-content'>
      <Slider {...settings}>
        {Comming.map((n, i) => {
          return (
            <div className='screen'>
              <div className='move'>
                <div key={i} className='slider-img'>
                  <img width={270} src={n.imagePortrait} alt='img' />
                </div>
                <div className='slider-title'>
                  <button onClick={() => ShowFilm(n.id)} className='btn1'>{">"} Chi Tiết</button>
                  <button onClick={() => ShowFilm(n.id)} className='btn2'>Mua Vé <img width={25} src={require('../../../Image/Movie/icon-ticket.png')} alt='img' /></button>
                  <p><b>Độ tuổi:</b> {n.age}</p>
                  <p><b>Thời lượng:</b> {n.duration} phút </p>
                </div>
              </div>
            </div>)
        })}
      </Slider>
    </div>
  )

}
