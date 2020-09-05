import React from "react";
import Panel from "../../../components/Panel";
import { nestByOne } from "../../../utils/api";
import { references } from "../../../utils/references/references";

function PeopleId(props) {
  const [data, setData] = React.useState([]);
  const list = [];
  const path = props.location.pathname.substring(1);

  React.useEffect(() => {
    nestByOne(setData, path);
  }, [path]);

  Object.entries(data).map((item) => list.push(item));

  return list[0] === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <>
      <Panel
        image={list[15][1]}
        list={[
          list[0],
          list[1],
          list[2],
          list[3],
          list[4],
          list[5],
          list[6],
          list[7],
        ]}
        imageList={[list[8], list[9], list[10], list[11], list[12]]}
        origin="people"
        id={references(list[15][1]).id}
      />
    </>
  );
}

export default PeopleId;
