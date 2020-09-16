import React from "react";
import Panel from "../../components/Panel";
import { references } from "../../utils/references/references";
import Main from "../../components/Main";

export default function Starships(props) {
  const path = props.location.pathname.substring(1);
  return (
    <>
      <Main path={path}>
        {(props) =>
          props.map((item, index) => (
            <Panel
              key={index}
              image={item[17][1]}
              list={[
                item[0],
                item[1],
                item[2],
                item[3],
                item[4],
                item[5],
                item[6],
                item[7],
                item[8],
                item[9],
                item[10],
                item[11],
                item[12],
              ]}
              imageList={[item[13], item[14]]}
              origin={path}
              id={references(item[17][1]).id}
            />
          ))
        }
      </Main>
    </>
  );
}
