import React from "react";
import "./style.css";
import { imagesReferences } from "../../utils/imagesReferences";
import List from "../List";

function Panel(props) {
  const { image, list, imageList } = props;
  return (
    <div className="panel">
      <img className="image" src={imagesReferences(image)} alt="" />
      <ul>
        {list.map((item) => (
          <>
            <li className="list">
              {item[0]}: {item[1]}
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
