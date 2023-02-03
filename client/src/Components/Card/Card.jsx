import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({
  img,
  name = "TOMB RIDER",
  price = "2500",
  gnres = "accion y aventura",
  rating = "5e",
}) {
  return (
    <div>
      <div class="card">
        <Link to="/detail">
          <img src="{img}" class="card-img-top" alt="img game" />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="title_gnres">Categoria: {gnres}</p>
          <p class="title_rating">Rating: {rating}</p>
          <p class="title_price">${price}</p>
          <button className="btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
