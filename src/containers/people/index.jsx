import React from "react";
import Panel from "../../components/Panel";
import { references } from "../../utils/references/references";
import Main from "../../components/Main";

function People({location}) {
  const path = location.pathname.substring(1);
  return (
    <>
      <Main path={path}>
        {(props) =>
          props.map((item, index) => (
            <Panel
              key={index}
              image={item[15][1]}
              list={[
                item[0],
                item[1],
                item[2],
                item[3],
                item[4],
                item[5],
                item[6],
                item[7],
              ]}
              origin="people"
              id={references(item[15][1]).id}
            />
          ))
        }
      </Main>
    </>
  );
}

export default People;
