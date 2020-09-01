import React from "react";
import Dummy from "../../components/Dummy";
import { nestByPage } from "../../utils/api";
import { keyMapper } from "../../utils/keyMapper";

function Planets() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const results = data.results;
  const loading = true;

  React.useEffect(() => {
    nestByPage(setData, "planets", page);
  }, [page]);
  console.log(data.results && data.results[0].name);
  //<Dummy data={data} keys={keyMapper(results)} />

  let abc = data.results && Object.entries(results[0]);
  return (
    <>
      <h1>Planets component</h1>
      {results && results.map(item => (
        <>
          {Object.entries(item)}
          <hr />
        </>
      ))}
    </>
  );
}

export default Planets;
