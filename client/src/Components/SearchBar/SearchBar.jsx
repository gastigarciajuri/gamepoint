import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar () {
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value.toLowerCase());
    }

    /* function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameVideojuegos(name))
        setName('')

    } */
return (
    <div>
        <input type='text'
        placeholder='Search...'
        onChange={(e) => handleInputChange(e)} />
        <button type='submit' /* onClick={(e) => handleSubmit(e)} */><SearchIcon/></button>
    </div> 
)
}