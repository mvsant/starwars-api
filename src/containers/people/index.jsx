import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import Panel from "../../components/Panel";

function People() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const results = data.results;
  const list = [];

  React.useEffect(() => {
    setLoading(true);
    nestByPage(setData, "people", page);
    //setTimeout(() => setLoading(false), 1500)
    setLoading(false);
  }, [page]);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }

  return (
    <div className="list-container">
      <Select counter={data.count} onChange={(e) => setPage(e.target.value)} />
      {loading === true
        ? "loading"
        : results &&
          list.map((item) => (
            <Panel
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
              origin="people"
              id={1}
            />
          ))}
    </div>
  );
}

export default People;
