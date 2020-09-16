import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import Panel from "../../components/Panel";
import { references } from "../../utils/references/references";
import Loading from "../../components/Loading";

function People(props) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const results = data.results;
  const path = props.location.pathname.substring(1);
  const list = [];

  React.useEffect(() => {
    setLoading(true);
    nestByPage(setData, path, page);
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
      {list.map((item, index) => (
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
          imageList={[item[8], item[9], item[10], item[11], item[12]]}
          origin={path}
          id={references(item[15][1]).id}
        />
      ))}
    </div>
  );
}

export default People;
