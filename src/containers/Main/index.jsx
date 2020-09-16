import React from "react";
import { nestByPage } from "../../utils/api";
import Loading from "../../components/Loading";
import { Select } from "@material-ui/core";

export default function Main(props) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const results = data.results;
  const path = props;
  const list = [];

  React.useEffect(() => {
    setLoading(true);
    nestByPage(setData, path.path, page);
    return setLoading(false);
  }, [path, page]);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }

  return list[0] === undefined || loading === true ? (
    <div className="panel">
      <Loading />
    </div>
  ) : (
    <div className="list-container">
      <Select counter={data.count} onChange={(e) => setPage(e.target.value)} />
      {props.children(list)}
    </div>
  );
}
