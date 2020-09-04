import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import Panel from "../../components/Panel";

function Films() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const results = data.results;
  const list = [];

  React.useEffect(() => {
    setLoading(true);
    nestByPage(setData, "films", page);
    return setLoading(false);
  }, [page]);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }

  function getId(item) {
    return item
      .substring(0, item.length - 1)
      .split("/")
      .pop(-1);
  }

  return list[0] === undefined || loading === true ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <div className="list-container">
      <Select counter={data.count} onChange={(e) => setPage(e.target.value)} />
      {list.map((item) => (
        <Panel
          image={item[13][1]}
          list={[item[0], item[1], item[2], item[3], item[4], item[5]]}
          imageList={[item[6], item[7], item[8], item[9], item[10]]}
          origin="films"
          id={getId(item[13][1])}
        />
      ))}
    </div>
  );
}

export default Films;
