import axios from 'axios';

export const GET_ALL_VIDEOJUEGOS = 'GET_ALL_VIDEOJUEGOS';

export const getAllVideojuegos = () => {
	return async function (dispatch) {
		try {
			const json = await axios.get('http://localhost:3001/videojuegos');
			return dispatch({
				type: GET_ALL_VIDEOJUEGOS,
				payload: json.data,
			});
        } catch (error) {
            console.log(error)
		}
	};
};