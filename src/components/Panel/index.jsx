import React from "react";
import "./style.css";
import { imagesReferences } from "../../utils/references/imagesReferences";
import List from "../List";
import { mask } from "../../utils/helpers/masks";
import { Link } from "react-router-dom";

function Panel(props) {
  const { image, list, imageList, origin, id } = props;
  const payload = {
    pathname: `/${origin}/${id}`,
    category: `${origin}`,
  };

  return (
    <div className="panel">
      <Link to={payload}>
        <img className="image" src={imagesReferences(image)} alt="" />
      </Link>
      <ul className="list">
        {list.map((item) => (
          <>
            <li>
              {mask(item[0])}: {item[1]}
            </li>
          </>
        ))}
      </ul>
      <div className="image-list">
        {imageList.map((item) =>
          typeof item[1] === "string" ? (
            <List title={item[0]} list={[item[1]]} />
          ) : (
            <List title={item[0]} list={item[1]} />
          )
        )}
      </div>
    </div>
  );
}
export default Panel;
