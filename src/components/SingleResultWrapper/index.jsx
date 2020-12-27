import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { StyledContainer, StyledPanelArea } from "../../styles/commomStyles";
import { nestByOne } from "../../utils/api";
import { Redirect } from "react-router-dom";

export default function SingleResultWrapper(props) {
  const [data, setData] = useState([]);
  const list = [];
  const path = props;

  useEffect(() => {
    nestByOne(setData, path.path);
  }, [path]);

  Object.entries(data).map((item) => list.push(item));

  if (data.detail === "Not found") {
    return <Redirect to="/page_not_found" />;
  } else {
    return list[0] === undefined ? (
      <StyledContainer>
        <StyledPanelArea>
          <Loading />
        </StyledPanelArea>
      </StyledContainer>
    ) : (
      <>{props.children({ list: list })}</>
    );
  }
}
/**
 The child will receive props.list because the object is composed manually:
 props.children({ list: list })
 Otherwise it will be the porps prop itself:
 props.children(list) Will be props in child.
 NOTE: You can destructure your variable as permitted in Javascript.
 **
 The props must be "initialised on child component or it will return an undefined result."
/>
 */
