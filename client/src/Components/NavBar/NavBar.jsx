import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div>
      <img src={Logo} alt="Logo" />
      <SearchBar />
      <Link to="/cuenta">
        <button>MI CUENTA</button>
      </Link>
      <Link to="/favoritos">
        <button>MIS FAVORITOS</button>
      </Link>
      <Link to="/carrito">
        <button>MI CARRITO</button>
      </Link>
    </div>
  );
}
