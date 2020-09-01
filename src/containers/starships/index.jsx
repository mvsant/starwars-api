import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import Panel from "../../components/Panel";

function Starships() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const results = data.results;
  const list = [];

  React.useEffect(() => {
    setLoading(true);
    nestByPage(setData, "starships", page);
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
            />
          ))}
    </div>
  );
}

export default Starships;
