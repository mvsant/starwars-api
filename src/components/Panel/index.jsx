import React from "react";
import "./style.css";
import List from "../List";
import { mask } from "../../utils/helpers/masks";
import { Link } from "react-router-dom";
import { references } from "../../utils/references/references";

function Panel(props) {
  const { image, list, imageList, origin, id } = props;
  const payload = {
    pathname: `/${origin}/${id}`,
    category: `${origin}`,
  };

  return (
    <div className="panel">
      <Link to={payload}>
        <img
          className="image"
          src={references(image).img}
          alt={references(image).name}
        />
      </Link>
      <ul className="list">
        {list.map((item, index) => (
          <li key={index}>
            {mask(item[0])}: {item[1]}
          </li>
        ))}
      </ul>
      <div className="image-list">
        {imageList.map((item, index) =>
          typeof item[1] === "string" ? (
            <List key={index} title={item[0]} list={[item[1]]} />
          ) : (
            <List key={index} title={item[0]} list={item[1]} />
          )
        )}
      </div>
    </div>
  );
}
export default Panel;
