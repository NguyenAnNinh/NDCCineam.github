import iReducter from "../../Model/iReducter";

const initialState = {
        info: null,
        booking: null
  };


const BookingContentReducer = (state = initialState, {type,payload}:iReducter) => {
    switch (type) {
        case 'GET_BOOKING_TICKET':
            return {...state,  booking: payload}
            
        case 'SET_INFO_BOOKING':
            return {...state, info: payload}

        default:
           return state;
    }
}


export default BookingContentReducer;