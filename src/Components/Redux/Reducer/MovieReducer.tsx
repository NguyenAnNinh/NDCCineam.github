import iReducter from "../../Model/iReducter";
const intialState = {
    showingFilm : [],
    commingFilm: [],
    schedule: []
}

const MovieReducer = (state = intialState, {payload, type}:iReducter) => {
    switch (type) {
        case 'GET_MOVIES':            
            return {
                ...state,
                showingFilm: payload.movieShowing,
                commingFilm: payload.movieCommingSoon,
            };

        case 'GET_SHOWTIME':
            return {
                ...state,
                schedule: payload
            }

        case 'GET_MOVIES_BY_CINEMA':
            return {
                ...state, 
                showingFilm: payload,
            }
    
        default:
            return state;
    }
}

export default MovieReducer;