import React from "react";
import Miniatures from "../Miniatures";
import { mask } from "../../utils/helpers/masks";

function List(props) {
  const { list, title } = props;

  return (
    <div className="list">
      {mask(title)} :
      <ul>
        {list.length === 0
          ? "N/A"
          : list.map((item, index) => (
              <li key={index + Math.random()}>
                <Miniatures link={item} />
              </li>
            ))}
      </ul>
    </div>
  );
}
export default List;
