import { combineReducers, createStore, applyMiddleware } from "redux";
import MiddleSaga from "./Saga/MiddleSaga";
import reduxSaga from "redux-saga";
import BookingContentReducer from "./Reducer/BookingContentReducer";
import MovieReducer from "./Reducer/MovieReducer";
import cinemadetail from "./Reducer/CinemaDetail";


const middleware = reduxSaga();
const allReducer = combineReducers({
  BookingRdc: BookingContentReducer,
  MovieRdc: MovieReducer,
  CinemaRdc: cinemadetail ,
});


export default createStore(allReducer, applyMiddleware(middleware));
middleware.run(MiddleSaga);
