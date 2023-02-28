import React from 'react'
import './Home.scss'
import Header from '../Header/Header';
import Slide from '../Home/Slide/Slide';
import Overview from './Overview/Overview';
import Event from './Event/Event';
import Footer from '../Footer/Footer';
import '../common.css'
import Loading from '../Loading/Loading';


export default function Home() {

  return (
    <div className='home'>
      <Slide />
      <Overview />
      <Event />
      <Loading/>
    </div>
  )
}
