import React from "react";
import Select from "../../../components/Select";
import Panel from "../../../components/Panel";
import { nestByOne, indexFullPath } from "../../../utils/api";
import List from "../../../components/List";

function Id(props) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  //const results = data.results;
  const list = [];
  const id = props.match.params.id;
  const origin = props.location.category;

  React.useEffect(() => {
    setLoading(true);
    indexFullPath(setData, "https://swapi.dev/api/people/1");
    // nestByOne(setData, `${origin}/${id}`);
    setLoading(false);
  }, []);

  //const tst = [Object.keys(data)[0], Object.values(data)[0]];

  Object.entries(data).map((item) => list.push(item));
  return "" + list && list[0][0];
}

export default Id;
