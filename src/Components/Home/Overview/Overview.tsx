import React, { useState } from 'react';
import ViewComming from './ViewComming'
import ViewShowing from './ViewShowing'
import "./Styleview.scss"


const Overview = () => {
  const [Show, SetShow] = useState(true)
  return (
    <div className='section-slidefilm'>
      <div className='formbutton'>
        <button className='btn1' onClick={() => SetShow(true)}><img width={62} src={require('../../../Image/Movie/icon-ticket.png')} alt='img'/> Phim Đang Chiếu</button>
        <button className='btn2' onClick={() => SetShow(false)}>Phim Sắp Chiếu <img width={40} src={require('../../../Image/Movie/icon-sap-chieu.png')} alt='img'/></button>
      </div>
      {Show && <ViewShowing />}
      {!Show && <ViewComming />}

    </div>
  );
};

export default Overview;
