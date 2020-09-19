import React from "react";
import Panel from "../../../components/Panel";
import { references } from "../../../utils/references/references";
import SingleResultWrapper from "../../../components/SingleResultWrapper";

export default function StarshipsId(props) {
  const path = props.location.pathname.substring(1);

  return (
    <SingleResultWrapper path={path}>
      {({ list }) => (
        <Panel
          image={list[17][1]}
          list={[
            list[0],
            list[1],
            list[2],
            list[3],
            list[4],
            list[5],
            list[6],
            list[7],
            list[8],
            list[9],
            list[10],
            list[11],
            list[12],
          ]}
          imageList={[list[13], list[14]]}
          origin="starships"
          id={references(list[17][1]).id}
        />
      )}
    </SingleResultWrapper>
  );
}
