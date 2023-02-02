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
    <div className="navbar">
      <div>
        <img src={Logo} alt="Logo" className="img" />
        <SearchBar />
        <div className="items">
          <div className='item1'>
          <Link to="/cuenta" >
            <AccountCircleOutlinedIcon/>
          </Link>
          </div>
          <div className='item2'>
          <Link to="/favorites" >
            <FavoriteBorderOutlinedIcon/>
          </Link>
          </div>
          <div className='item3'>
          <Link to="/shoppingCart">
            <ShoppingCartOutlinedIcon/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
