import React from "react";
import { NavLink } from "react-router-dom";
import { mask } from "../../utils/helpers/masks";
import { activeStyle } from "./style";

const pages = [
  "people",
  "planets",
  "films",
  "vehicles",
  "starships",
  "species",
  "about",
];
export default function Options() {
  return (
    <ul>
      {pages.map((item) => (
        <li key={item}>
          <NavLink activeStyle={activeStyle} to={'/'+item}>
            {mask(item)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
