import React from "react";
import { indexFullPath } from "../../utils/api";
import { imagesReferences } from "../../utils/references/imagesReferences";
import "./style.css";

function Miniatures(props) {
  const { link } = props;
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    indexFullPath(setData, link);
  }, [link]);

  //  new RegExp('\\b' + myWord + '\\b')

  return (
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
