import {GET_ALL_VIDEOGAME, GET_NAME} from './action'


const initialState = {
    videogames: [],
	allVideogames:[]
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_VIDEOGAME: 
        return {
            ...state,
            videogames: action.payload,
            allVideogames: action.payload,
        };
        case GET_NAME:
            return{
                ...state,
                videogames: action.payload,
            }
        default:
			return state;
	}
};

export default rootReducer;