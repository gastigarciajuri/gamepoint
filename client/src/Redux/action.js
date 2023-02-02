import axios from 'axios';

export const GET_ALL_VIDEOGAME = 'GET_ALL_VIDEOGAME';
export const GET_NAME = 'GET_NAME';

export const getAllVideojuegos = () => {
	return async function (dispatch) {
		try {
			const json = await axios.get('http://localhost:3001/videogame');
			return dispatch({
				type: GET_ALL_VIDEOGAME,
				payload: json.data,
			});
        } catch (error) {
            console.log(error)
		}
	};
};

export const getNameGame =(name) => {
      return async function(dispatch){
		try{
			const json = await axios.get('http://localhost:3001/videogame?name=' + name)
			return dispatch({
				type: GET_NAME,
				payload: json.data
			})
		} catch (error) {
            console.log(error)
		}
	  }
}