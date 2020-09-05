import React from "react";
import { references } from "../../utils/references/references";
import "./style.css";
import { Link } from "react-router-dom";
import { urlMask } from "../../utils/helpers/masks";

function Miniatures(props) {
  const { link } = props;
  //const path = props.location.pathname.substring(1);

  const payload = {
    pathname: `${urlMask(link)}/${references(link).id}`,
  };
  //  new RegExp('\\b' + myWord + '\\b')

  return link === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <>
      <Link to={payload}>
        <img
          className="avatar"
          src={references(link).img}
          alt={references(link).name}
        />
        <h6>{references(link).name}</h6>
      </Link>
    </>
  );
}
export default Miniatures;
