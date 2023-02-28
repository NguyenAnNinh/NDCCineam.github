import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";
import { ISlide } from "./ISlide";
import { FaImages } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Slide() {
  
  const [slide, setSlide] = useState<Array<ISlide>>([])
  const [index, setIndex] = useState(0)
  const navID = useNavigate()

  useEffect(() => {
    fetch('https://teachingserver.onrender.com/cinema/nowAndSoon')
      .then(res => res.json())
      .then(data => {
        setSlide(data.movieShowing);
      });
  }, []);

  
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const ShowFilm = (id: any) => {
        navID('/Films/' + id)
    }

  return (
    <div className="Slide">
        <Slider {...settings}>
        {
          slide.map((item, i) => {
            return <div key={i} className='item'>
              <div className="card">
              <img src={item.imageLandscapeMobile} onClick={() => ShowFilm(item.id)} alt='img' />
              </div>
            </div>
          })
        }
        </Slider>

    </div>
  );
}