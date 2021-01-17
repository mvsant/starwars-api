import React, { useState, useEffect } from "react";
import { nestByPage, nestByQuery } from "../../utils/api";
import Loading from "../Loading";
import { StyledContainer, StyledPanelArea } from "../../styles/commomStyles";
import Select from "../Select";
import { FieldArea } from "./style";
import Search from "../SearchField";
import TopButton from "../TopButton";

export default function Main({ path, children }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const results = data.results;
  const list = [];

  useEffect(() => {
    nestByPage(setData, path, page);
    window.scrollTo(0, 0);
  }, [page, path]);

  useEffect(() => {
    if (search === true) {
      nestByQuery(setData, path, query, page);
      setSearch(false);
    }
  }, [path, page, search, query]);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }

  return list[0] === undefined ? (
    data.length === 0 ? (
      <StyledContainer>
        <StyledPanelArea>
          <Loading />
        </StyledPanelArea>
      </StyledContainer>
    ) : (
      <StyledContainer>
        <StyledPanelArea>
          <p>
            <b>No results for: {query}, in this category.</b>
          </p>
        </StyledPanelArea>
      </StyledContainer>
    )
  ) : (
    <StyledContainer>
      <FieldArea>
        <Select
          counter={data.count}
          onChange={(e) => {
            setPage(e.target.value);
          }}
          page={page}
        />
        <Search
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onClick={() => {
            setPage(1);
            setSearch(true);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setPage(1);
              setSearch(true);
            }
          }}
        />
      </FieldArea>
      {children(list)}
      <TopButton />
    </StyledContainer>
  );
}
