import React from "react";

function Card(props) {
  const { title, row } = props;
  return (
    <div style={{ color: "green" }}>
      {title}
      {row}
    </div>
  );
}
export default Card;
