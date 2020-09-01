import React from "react";
import Card from "./Card";

function Dummy(props) {
  const { keys, data } = props;
  const results = data.results;
  const rows = [];
  const labels = [];

  for (let i = 0; i <= keys.length; i++) {
    rows[keys[i]] = [];
  }

  for (const item in results) {
    for (let i = 0; i <= keys.length; i++) {
      rows[keys[i]].push(results[item][keys[i]]);
      labels.push([keys[i], rows[keys[i]]]);
      rows[keys[i]] = [];
    }
  }

  //<Card title={keys[i]} row={rows[keys[i]]} />
  console.log(keys);

  return <>{labels}</>;
}
export default Dummy;
