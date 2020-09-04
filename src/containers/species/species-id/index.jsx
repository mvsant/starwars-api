import React from "react";
import Panel from "../../../components/Panel";
import { nestByCategory } from "../../../utils/api";

function SpeciesId(props) {
  const [data, setData] = React.useState([]);
  const list = [];
  const id = props.match.params.id;
  const origin = props.location.category;

  React.useEffect(() => {
    nestByCategory(setData, origin, id);
  }, [origin, id]);
  Object.entries(data).map((item) => list.push(item));

  function getId(item) {
    return item
      .substring(0, item.length - 1)
      .split("/")
      .pop(-1);
  }

  return list[0] === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <Panel
      image={list[14][1]}
      list={[
        list[0],
        list[1],
        list[2],
        list[3],
        list[4],
        list[5],
        list[6],
        list[7],
        list[9],
      ]}
      imageList={[list[8], list[10], list[11]]}
      origin="species"
      id={getId(list[14][1])}
    />
  );
}

export default SpeciesId;
