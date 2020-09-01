import React from "react";
import "./style.css";

export function Card(props) {
  const { title, img } = props;
  return (
    <div className="card">
      <div className="card-title">
        <h3>{title || "card title"}</h3>
      </div>
      <div className="card-image">
        <img className="card-image" src={img} alt={title + "image"} />
      </div>
    </div>
  );
}

export default Card;
