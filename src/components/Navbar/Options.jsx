import React from "react";
import { NavLink } from "react-router-dom";
import { mask, urlMask } from "../../utils/helpers/masks";
import { activeStyle } from "./style";
export default function Options({ data }) {
  return (
    <ul>
      {Object.entries(data).map((item, index) => (
        <li key={item}>
          <NavLink activeStyle={activeStyle} to={urlMask(item[1])}>
            {mask(item[0])}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
