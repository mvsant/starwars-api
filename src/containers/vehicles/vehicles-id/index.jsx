import React from "react";
import Panel from "../../../components/Panel";
import { nestByCategory } from "../../../utils/api";

function VehiclesId(props) {
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
        list[8],
        list[9],
        list[10],
      ]}
      imageList={[list[11], list[12]]}
      origin="vehicles"
      id={getId(list[15][1])}
    />
  );
}

export default VehiclesId;
