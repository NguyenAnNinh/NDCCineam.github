import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Footer'
import Cauhoithuonggap from './Cauhoithuonggap'
import Chinhsachthanhtoan from './Chinhsachthanhtoan'
import Chinhsachthongtin from './Chinhsachthongtin'
// import Header from '../Header/Header'
import Dieukhoanchung from './Dieukhoanchung'
import Dieukhoangiaodich from './Dieukhoangiaodich'
import Huongdandatveonline from './Huongdandatveonline'
import './InfoFooter.scss'
import Lienhe from './Lienhe'
import Tuyendung from './Tuyendung'
// import Dangkinhantin from './Dangkinhantin'


export default function InfoFooter() {
  return (
    <div>
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/dieukhoanchung' element={<Dieukhoanchung/>}/>
        <Route path='/cauhoithuonggap' element={<Cauhoithuonggap/>}/>
        <Route path='/dieukhoangiaodich' element={<Dieukhoangiaodich/>}/>
        <Route path='/huongdandatveonline' element={<Huongdandatveonline/>}/>
        <Route path='/chinhsachthanhtoan' element={<Chinhsachthanhtoan/>}/>
        <Route path='/lienhe' element={<Lienhe/>}/>
        <Route path='/chinhsachbaomatthongtin' element={<Chinhsachthongtin/>}/>
        <Route path='/tuyendung' element={<Tuyendung/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
