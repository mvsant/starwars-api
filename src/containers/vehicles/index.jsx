import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import List from "../../components/List";
import { mask } from "../../utils/masks";

function Vehicles() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const results = data.results;
  //const loading = true;
  const list = []

  React.useEffect(() => {
    nestByPage(setData, "vehicles", page);
  }, [page]);

  for (const item in results) {
    list.push(
      <>
        {Object.entries(results[item]).map((sub, index) => (
          index === 11 || index === 12 ?
            <List title={sub[0]} list={sub[1]} />
            :
            <div key={index}>
              {mask(sub[0])} :{sub[1].length === 0 ? 'N/A' : sub[1]}
              <br />
            </div>
        ))}
        <hr />
      </>
    )
  }


  return (
    <>
      <h1>Vehicles component</h1>
      <Select counter={data.count} onChange={(e) => setPage(e.target.value)} />
      {results && list}
    </>
  );
}

export default Vehicles;
