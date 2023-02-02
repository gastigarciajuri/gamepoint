import {GET_ALL_VIDEOJUEGOS} from './action'

const initialState = {
    videoJuegos: [],
	allVideoJuegos:[]
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_VIDEOJUEGOS: return {
            ...state,
            videoJuegos: action.payload,
            allVideoJuegos: action.payload,
        };
        default:
			return state;
	}
};

export default rootReducer;