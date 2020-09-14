import React from "react";
import Routes from "./routes";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "./styles/global.css";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Routes />;
    </StylesProvider>
  );
}

export default App;
