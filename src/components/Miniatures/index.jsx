import React from "react";
import { references } from "../../utils/references/references";
import "./style.css";

function Miniatures(props) {
  const { link } = props;

  //  new RegExp('\\b' + myWord + '\\b')

  return link === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <>
      <img
        className="avatar"
        src={references(link).img}
        alt={references(link).name}
      />
      <h6>{references(link).name}</h6>
    </>
  );
}
export default Miniatures;
