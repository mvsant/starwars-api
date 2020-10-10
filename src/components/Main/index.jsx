import React, { useState, useEffect } from "react";
import { nestByPage, nestByQuery } from "../../utils/api";
import Loading from "../Loading";
import { StyledPanelArea } from "../../styles/commomStyles";
import Select from "../Select";
import { FieldArea } from "./style";
import Search from "../SearchField";
import { Redirect } from "react-router-dom";

export default function Main(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const results = data.results;
  const path = props;
  const list = [];

  useEffect(()=>{
    nestByPage(setData, path.path, page);
    return setLoading(false);
  },[page,path])

  useEffect(() => {
    setLoading(true);
    if (search === true) {
      nestByQuery(setData, path.path, query, page);
      setSearch(false);
      setQuery('');
      return setLoading(false);
    }
    setLoading(false);
  }, [path, page, search, query]);
  
  console.log(data);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }
  
if(data.count === 0){
return <Redirect to="/page_not_found"/>
}
else
  return loading === true || list[0] === undefined ? (
    <StyledPanelArea>
      <Loading />
    </StyledPanelArea>
  ) : (
    <>
    <FieldArea>
      <Select 
        counter={data.count}
        onChange={(e) => {
          setPage(e.target.value);
        }}
      />
      <Search
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClick={() => {
          setPage(1);
          setSearch(true);
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            setPage(1);
            setSearch(true);
            event.preventDefault();
          }
        }}
      />
    </FieldArea>
      {props.children(list)}
    </>
  );
}
