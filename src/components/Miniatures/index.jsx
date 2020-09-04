import React from "react";
import { indexFullPath } from "../../utils/api";
import { imagesReferences } from "../../utils/references/imagesReferences";
import "./style.css";

function Miniatures(props) {
  const { link } = props;
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    const myAbortController = new AbortController();
    indexFullPath(setData, link);
    return myAbortController.abort();
  }, [link]);

  //  new RegExp('\\b' + myWord + '\\b')

  return data === undefined ? (
    <div className="panel">
      <div className="list">"Loading"</div>
    </div>
  ) : (
    <>
      <img
        className="avatar"
        src={imagesReferences(link)}
        alt={data.name || data.title}
      />
      <h6>{data.name || data.title}</h6>
    </>
  );
}
export default Miniatures;
