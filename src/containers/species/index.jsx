import React from "react";
import { nestByPage } from "../../utils/api";
import Select from "../../components/Select";
import List from "../../components/List";
import Panel from "../../components/Panel";
import { imagesReferences } from "../../utils/imagesReferences";
import './style.css'

function Species() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const results = data.results;
  //const loading = true;
  const list = []

  React.useEffect(() => {
    nestByPage(setData, "starships", page);
  }, [page]);

  for (const item in results) {
    list.push(
      <>
        {Object.entries(results[item]).map((sub, index) => (
          index === 17 ?
            <img className="poster-mini" src={imagesReferences(sub[1])} alt={data.name} />
            :
            index === 14 ?
              <List title={sub[0]} list={sub[1]} />
              :
              <div key={index}>
                {sub[0]} :{sub[1].length === 0 ? 'N/A' : sub[1]}
                <br />
              </div>
        ))}
        <Panel />
        <hr />
      </>
    )
  }


  return (
    <>
      <h1>Species component</h1>
      <Select counter={data.count} onChange={(e) => setPage(e.target.value)} />
      {results && list}
    </>
  );
}

export default Species;
