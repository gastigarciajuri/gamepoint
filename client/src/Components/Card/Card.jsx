import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Card({
  img,
  name = "TOMB RIDER",
  price = "2500",
  gnres = "Accion y aventura",
  rating = "5",
}) {
  return (
    <div>
      <div class="card">
        <Link to="/detail">
          <img src="{img}" class="imgC" alt="img game" />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="title_gnres">{gnres}</p>
          <StarBorderIcon className='icon'/>
          <p class="title_rating">
            {rating}</p>
          <p class="title_price">${price}</p>
          <button className="btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
