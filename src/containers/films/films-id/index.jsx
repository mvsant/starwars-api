import React from "react";
import Panel from "../../../components/Panel";
import { references } from "../../../utils/references/references";
import SingleResultWrapper from "../../../components/SingleResultWrapper";

export default function FilmsId({location}) {
  const path = location.pathname.substring(1);

  return (
    <SingleResultWrapper path={path}>
      {({ list }) => (
        <Panel
          image={list[13][1]}
          list={[list[0], list[1], list[2], list[3], list[4], list[5]]}
          imageList={[list[6], list[7], list[8], list[9], list[10]]}
          origin="films"
          id={references(list[13][1]).id}
        />
      )}
    </SingleResultWrapper>
  );
}
