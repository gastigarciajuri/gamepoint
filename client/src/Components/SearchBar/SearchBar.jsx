import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import './SearchBar.css'
import { getNameGame } from "../../Redux/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameGame(name))
        setName('')

    }
  return (
    <div className="searchbar">
      <button type="submit"  onClick={(e) => handleSubmit(e)} className="button">
        <SearchIcon  style={{ fontSize:65 }} />
      </button>
      <input
        type="text"
        placeholder="  Buscar..."
        onChange={(e) => handleInputChange(e)}
        className='input'
      />
    </div>
  );
}
