import { takeEvery, put, call } from "redux-saga/effects";

//Fetch:

const Booking = async () =>{
  let reg = await fetch('https://vietcpq.name.vn/U2FsdGVkX19OPhHMXw1V9CXSBEQUK+Pcc8fSVohfF7Y=/cinema/booking/detail')
  let data = await reg.json();
  return data;
}

const fetchSchedule = async (id: string) =>{
  let res = await fetch(`https://vietcpq.name.vn/U2FsdGVkX19OPhHMXw1V9CXSBEQUK+Pcc8fSVohfF7Y=/cinema/movie/${id}`)
  let data = await res.json();
  return data
}
//End Fetch:

function* getBooking(prop:any):any {
  let data = yield call(Booking);
  yield put({
    type: 'GET_BOOKING_TICKET',
    payload: data
  })
}

function* getShowtimeAndScheldule({ payload }: any): any {
  let data = yield call(fetchSchedule, payload);
  yield put({
      type: 'GET_SHOWTIME',
      payload: data,
  })
}


function* setBookingTicket({ payload }: any): any {
  yield put({ type: 'SET_INFO_BOOKING', payload })
}




function* mySaga() {
  yield takeEvery("GET_SCHEDULE", getShowtimeAndScheldule);
  yield takeEvery("GET_BOOKING_TICKET", getBooking);
  yield takeEvery("SET_INFO_BOOKING", setBookingTicket);
}
export default mySaga;
