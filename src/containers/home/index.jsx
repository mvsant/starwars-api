import React from "react";
import { index, baseUrl } from "../../utils/api";
import { Link } from "react-router-dom";
import { urlMask, mask } from "../../utils/helpers/masks";
import { references } from "../../utils/references/references";
import Card from "../../components/Card";
import { StyledHome, StyledHomeList } from "./style";

function Home() {
  let [data, setData] = React.useState(""); // state hook

  React.useEffect(() => {
    index(setData);
  }, []);

  return data === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
      <StyledHome>
        <h1>Welcome to Stars Wars API!</h1>
        <h2>Dive into some SW informations:</h2>
        <StyledHomeList>
          {Object.entries(data).map((item, index) => (
            <Link key={index} to={urlMask(item[1])}>
              <Card
                title={mask(item[0])}
                img={references(baseUrl + item[0] + "/4/").img}
              ></Card>
            </Link>
          ))}
        </StyledHomeList>
        <h2>A long time ago, in a galaxy far,far away...</h2>
      </StyledHome>
    );
}

export default Home;
