import React from "react";
import { references } from "../../utils/references/references";
import { Link } from "react-router-dom";
import { urlMask } from "../../utils/helpers/masks";
import { StyledPanelArea, StyledAvatar } from "../../styles/commomStyles";
import Loading from "../Loading";

function Miniatures(props) {
  const { link } = props;

  const payload = {
    pathname: `${urlMask(link)}/${references(link).id}`,
  };

  return link === undefined ? (
    <StyledPanelArea>
      <Loading />
    </StyledPanelArea>
  ) : (
    <>
      <Link to={payload}>
        <StyledAvatar src={references(link).img} alt={references(link).name} />
        <h6>{references(link).name}</h6>
      </Link>
    </>
  );
}
export default Miniatures;
