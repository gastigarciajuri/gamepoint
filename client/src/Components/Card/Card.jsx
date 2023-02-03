import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export default function Card({ img, name/* ='TOMB RIDER' */, price/* ='2500' */, gnres/* ='accion y aventura' */, rating/* ='5e' */ }) {
  return (
    <div className="container1">
      <div className="imgC">
        <Link to="/detail">
          <img src={img} alt="img game" />
        </Link>
      </div>
      <div className="container2">
        <h3 className="title_name">{name}</h3>
        <h2 className="title_gnres">Categoria: {gnres}</h2>
        <h2 className="title_rating">Rating: {rating}</h2>
        <h2 className="title_price">${price}</h2>
       
        <button className="btn">Agregar al carrito</button>
      </div>
    </div>
  );
}
