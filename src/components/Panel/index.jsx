import React from "react";
import List from "../List";
import { categoryMask, mask } from "../../utils/helpers/masks";
import { Link } from "react-router-dom";
import { references } from "../../utils/references/references";
import {
  StyledPanelArea,
  StyledPanelImage,
  StyledListArea,
  StyledImageList,
} from "../../styles/commomStyles";

function Panel(props) {
  const { image, list, imageList, origin, id } = props;
  const payload = {
    pathname: `/${origin}/${id}`,
    category: `${origin}`,
  };

  return (
    <StyledPanelArea>
      <Link to={payload}>
        <StyledPanelImage
          src={references(image).img}
          alt={references(image).name}
        />
      </Link>
      <StyledListArea>
        {list.map((item, index) => (
          <li key={index}>
            {mask(item[0])}: {categoryMask(item[0],item[1])}
          </li>
        ))}
      </StyledListArea>
      <StyledImageList>
        {imageList.map((item, index) =>
          typeof item[1] === "string" ? (
            <List key={index} title={item[0]} list={[item[1]]} />
          ) : (
            <List key={index} title={item[0]} list={item[1]} />
          )
        )}
      </StyledImageList>
    </StyledPanelArea>
  );
}
export default Panel;
