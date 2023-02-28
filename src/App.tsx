import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Showtime from './Components/Header/InfoHeader/Showtime/Showtime';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Dieukhoanchung from './Components/Footer/InfoFooter/Dieukhoanchung';
import Cauhoithuonggap from './Components/Footer/InfoFooter/Cauhoithuonggap';
import Dieukhoangiaodich from './Components/Footer/InfoFooter/Dieukhoangiaodich';
import Huongdandatveonline from './Components/Footer/InfoFooter/Huongdandatveonline';
import Chinhsachthanhtoan from './Components/Footer/InfoFooter/Chinhsachthanhtoan';
import Lienhe from './Components/Footer/InfoFooter/Lienhe';
import Chinhsachthongtin from './Components/Footer/InfoFooter/Chinhsachthongtin';
import Tuyendung from './Components/Footer/InfoFooter/Tuyendung';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UudaiSukien from './Components/Header/InfoHeader/UudaiSukien';
import Overview from './Components/Home/Overview/Overview';
import TicketsCombo from './Components/ChooseTicket/TicketsCombo';
import Danhgiaphim from './Components/Header/InfoHeader/Danhgiaphim';
import Thanhvien from './Components/Header/InfoHeader/Thanhvien';
import Complete from './Components/ChooseChair/Complete';
import './App.scss'
import './Components/common.css'


function App() {
  return (
    <div className='cinema'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Film' element={<Overview />} />
          <Route path='/Showtime' element={<Showtime />} />
          <Route path='/Films/:id' element={<MovieDetail />} />
          <Route path='/dieukhoanchung' element={<Dieukhoanchung />} />
          <Route path='/cauhoithuonggap' element={<Cauhoithuonggap />} />
          <Route path='/dieukhoangiaodich' element={<Dieukhoangiaodich />} />
          <Route path='/huongdandatveonline' element={<Huongdandatveonline />} />
          <Route path='/chinhsachthanhtoan' element={<Chinhsachthanhtoan />} />
          <Route path='/lienhe' element={<Lienhe />} />
          <Route path='/chinhsachbaomatthongtin' element={<Chinhsachthongtin />} />
          <Route path='/tuyendung' element={<Tuyendung />} /> 
          <Route path='/Films/:id/Detail/:id' element={<TicketsCombo />} /> 
          <Route path='/uudaisukien' element={<UudaiSukien />} />
          <Route path='/danhgiaphim' element={<Danhgiaphim />} />
          <Route path='/thanhvien' element={<Thanhvien />} />
          <Route path='/Success' element={<Complete />} />
        </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
