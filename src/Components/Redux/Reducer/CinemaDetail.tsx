import eReducter from "../../Model/iReducter"

const initalState = {
    cinema: [],
    index: []
}

const cinemadetail = (state = initalState, { type, payload }: eReducter) => {
    switch (type) {
        case 'GET_CINEMA':
            return { cinema: payload };

        case 'SET_INDEX':
            return { index: payload }

        default:
            return state;
    }
}


export default cinemadetail;