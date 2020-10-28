import React from "react";
import Miniatures from "../Miniatures";
import { mask } from "../../utils/helpers/masks";
import { StyledListArea } from "../../styles/commomStyles";

function List(props) {
  const { list, title } = props;

  return (
    <StyledListArea>
      {mask(title)} :
      <ul>
        {(list && list.length === 0) || list === null
          ? "N/A"
          : list.map((item, index) => (
            <li key={index + Math.random()}>
              <Miniatures link={item} />
            </li>
          ))}
      </ul>
    </StyledListArea>
  );
}
export default List;
