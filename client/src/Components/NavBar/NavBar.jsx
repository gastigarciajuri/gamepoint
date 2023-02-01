import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="Logo" className="img" />
        <SearchBar />
        <div className="items">
          <div className='item'>
          <Link to="/cuenta" >
            <AccountCircleOutlinedIcon className="icon" />
          </Link>
          </div>
          <div className='item'>
          <Link to="/favorites" >
            <FavoriteBorderOutlinedIcon className="icon" />
          </Link>
          </div>
          <div className='item'>
          <Link to="/shoppingCart">
            <ShoppingCartOutlinedIcon className="icon"/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
