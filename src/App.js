import React from "react";
import Routes from "./routes";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Routes />;
    </StylesProvider>
  );
}

export default App;
