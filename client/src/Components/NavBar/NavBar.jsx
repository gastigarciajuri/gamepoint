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
          <Link to="/cuenta" className="link">
            <AccountCircleOutlinedIcon style={{ fontSize: 40 }}  />
          </Link>
          </div>
          <div className='item2'>
          <Link to="/favorites" className="link" >
            <FavoriteBorderOutlinedIcon  style={{ fontSize:40 }}  />
          </Link>
          </div>
          <div className='item3'>
          <Link to="/shoppingCart" className="link">
            <ShoppingCartOutlinedIcon  style={{ fontSize: 40 }} />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
