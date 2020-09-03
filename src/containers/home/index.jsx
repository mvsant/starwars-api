import React from "react";
import { index, baseUrl } from "../../utils/api";
import { Link } from "react-router-dom";
import { urlMask, namesMask } from "../../utils/helpers/masks";
import Card from "../../components/Card";
import "./style.css";
import { imagesReferences } from "../../utils/references/imagesReferences";

function Home() {
  let [data, setData] = React.useState(""); // state hook

  React.useEffect(() => {
    index(setData);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Stars Wars API!</h1>
      <h2>Dive into some SW informations:</h2>
      <div className="home-list">
        {Object.entries(data).map((item, index) => (
          <Link to={urlMask(item[1])}>
            <Card
              title={namesMask(item[0])}
              img={imagesReferences(baseUrl + item[0] + "/4/")}
            ></Card>
          </Link>
        ))}
      </div>
      <h2>A long time ago, in a galaxy far,far away...</h2>
    </div>
  );
}

export default Home;
